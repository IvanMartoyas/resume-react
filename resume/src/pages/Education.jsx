import { base, education } from '../model/resume_model'
import { useSelector } from 'react-redux';

let lang = base.lang_index;
import Institute from '../components/Institute';

export default function Education () {
    var _lang_index = useSelector((state) => state.lang.value);
    return (
        <>
            <div className="card p-3">
                <div className=''>
                    <h2>{education.label[_lang_index]}</h2>
                </div>
                <div className="mt-4">
                    {education.data.map((institute) => <Institute key={institute} institute={institute} className=""></Institute> )}
                </div>
            </div>
        </>
  
    )
}