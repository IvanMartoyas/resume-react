import { base } from '../model/resume_model'
import AboutProgram from '../components/About-programm';
import Suggestions from '../components/Suggestions';

import { useSelector } from 'react-redux';


export default function Sitbar () {
    var _lang_index = useSelector((state) => state.lang.value);
    return (
       <>
        <aside className="bg-light p-3 rounded-2">
            <div>
                <div className='vacancyTitle'>
                    {base.vacancy[_lang_index]}  <br/> 
                    {base.title_resume[_lang_index]}
                </div>
                <div className='mb-4 fs-4'>
                    <b> {base.salary.label[_lang_index]}</b> <br />
                    <div>{base.salary.value}</div>
                </div>
                
            </div>
            <Suggestions/>
            <div className="text-secondary">
                <hr/>
            </div>
            <AboutProgram />
        </aside>
       </>
    )
}