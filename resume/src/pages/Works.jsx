import { base, work_experience } from '../model/resume_model'
import { useSelector } from 'react-redux';

export default function Works () {
    let _lang_index = useSelector((state) => state.lang.value);
    return (
        <>
            <div className="card p-3">
                <div className=''>
                    <h2>{work_experience.label[_lang_index]}</h2>
                </div>
                <div className="mt-4">
                    {work_experience.data.map((factory, i) => <Company key={i} company={factory} className=""></Company> )}
                </div>
            </div>
        </>
    )
}

function Company({company}) {
    
    let _lang_index = useSelector((state) => state.lang.value);

    let start_date = new Date(company.timeStart.year, company.timeStart.month, 0); 
    let start_year =  start_date.getFullYear();
    let start_month = start_date.toLocaleString('default', { month: 'long' })

    let end_year = '';
    let end_month = '';

    if(!company.working_now.value) {
        let end_date = new Date(company.timeEnd.year, company.timeEnd.month, 0); 
        end_year = company.timeEnd.year;
        end_month = end_date.toLocaleString('default', { month: 'long' })
    }

    return (
        <div className="bg-secondary card company mb-3 p-3 text-bg-secondary">
            <header className="company__map">
                <div className='badge bg-danger'>{company.label[_lang_index]}</div>
                <p>{company.place_worck.label[_lang_index]}</p>
                <h3> {company.place_worck.value[_lang_index]}</h3>
            </header>
            <div className='mb-3 company__description'>
                <b>{company.description.label[_lang_index]}</b> <br />
                <p>
                    {company.description.value[_lang_index]}
                </p>
            </div>
            <div className="company__worckTime row">
                <div className="col-12 col-sm-6">
                    <p className='mb-0'>{company.timeStart.label[_lang_index]}</p>
                    <b> {start_month} {start_year}</b>
                </div>
                <div className="col-12 col-sm-6 mt-2 col-sm-0">
                    <p className='mb-0'>{company.timeEnd.label[_lang_index]}</p>
                    <b>{(!company.working_now.value) ? end_month + ' ' +end_year : company.working_now.label[_lang_index]}</b>
                </div>
            </div>
        </div>
    )
} 
