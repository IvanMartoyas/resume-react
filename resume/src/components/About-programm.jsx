import {base } from '../model/resume_model';
import { useSelector } from 'react-redux';

export default function Sitbar () {
    var _lang_index = useSelector((state) => state.lang.value);
    return (
       <>
        <div className="ABProgramm">
            <div>
                <h3>{base.about_programm.label[_lang_index]}</h3>
                <b className='ABProgramm__description'>{base.about_programm.description[_lang_index]}</b>
            </div>
            <div className="tags">
                <div className="tags__title">{base.about_programm.tag_title[_lang_index]}</div>
                <div className="tags__row">
                    {base.about_programm.data.map((tehnology) => <div key={tehnology} className="tags__item badge bg-danger">{tehnology}</div> )}
                </div>
            </div>
        </div>
        
       </>
    )
}