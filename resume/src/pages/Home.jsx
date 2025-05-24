import { base, skills } from '../model/resume_model'
import { useSelector } from 'react-redux';
import { Contacts } from '../components/Contact'
import Man from '../components/Man'

export default function Home () {
    var _lang_index = useSelector((state) => state.lang.value);
    return (
        <>
            <Man></Man>
            <div className="card mt-4 p-3">
                <div className="tags">
                    <h3 className="">{skills.label[_lang_index]}</h3>
                    <div className="tags__row">
                        {skills.data.map((skill) => <div key={skill} className="tags__item badge bg-danger">{skill}</div> )}
                    </div>
                </div>

                <Contacts></Contacts>
            </div>
            
        </>
    )
}