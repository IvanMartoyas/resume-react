import { base, skills } from '../model/resume_model'
import { useSelector } from 'react-redux';
import { Contacts } from '../components/Contact'
export default function Home () {
    var _lang_index = useSelector((state) => state.lang.value);
    return (
        <>
            <div className=''>
                <h2>{base.about.label[_lang_index]}</h2>
                <p>{base.about.description[_lang_index]}</p>
            </div>
            <div className="tags">
                <div className="tags__title">{skills.label[_lang_index]}</div>
                <div className="tags__row">
                    {skills.data.map((skill) => <div key={skill} className="tags__item badge bg-danger">{skill}</div> )}
                </div>
            </div>
            <div className="">
                
                <Contacts></Contacts>
            </div>
        </>
    )
}