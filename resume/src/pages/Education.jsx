import { base, education } from '../model/resume_model'
import { useSelector } from 'react-redux';

let lang = base.lang_index;

export default function Education () {
    var _lang_index = useSelector((state) => state.lang.value);
    return (
        <>
            <div className=''>
                <h2>{education.label[_lang_index]}</h2>
            </div>
             <div className="mt-4">
                {education.data.map((institute) => <Institute key={institute} institute={institute} className=""></Institute> )}
            </div>
        </>
  
    )
}
function Institute({institute}) {
    var _lang_index = useSelector((state) => state.lang.value);
    // расчитываю время начала и окончания обучения
    let start_date = new Date(institute.timeStart.year, institute.timeStart.month, 0); 
    let start_year =  start_date.getFullYear();
    let start_month = start_date.toLocaleString('default', { month: 'long' })

    let end_year = '';
    let end_month = '';

    if(!institute.studying_now.value) {
        let end_date = new Date(institute.timeEnd.year, institute.timeEnd.month, 0); 
        end_year = institute.timeEnd.year;
        end_month = end_date.toLocaleString('default', { month: 'long' })
    }

    return (
        <div className="bg-secondary card institute mb-2 p-3 text-bg-secondary">
            <header className="institute__header">
                <div className='badge bg-danger mb-2'>{institute.level[_lang_index]}</div>
                <h3> {institute.label[_lang_index]}</h3>
            </header>
            <div>
                <b>{institute.post.label[_lang_index]}</b>
                <p> {institute.post.value[_lang_index]}</p>
                
            </div>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className='mb-0'>{institute.timeStart.label[_lang_index]}</p>
                    <b> {start_month} {start_year}</b>
                </div>
                <div className="col-12 col-sm-6 mt-2 col-sm-0">
                    <p className='mb-0'>{institute.timeEnd.label[_lang_index]}</p>
                    <b>{(!institute.studying_now.value) ? end_month + ' ' +end_year : institute.studying_now.label[_lang_index]}</b>
                </div>
            </div>
        </div>
    )
}