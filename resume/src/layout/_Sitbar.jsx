import { base } from '../model/resume_model'
import AboutProgram from '../components/About-programm';
import Suggestions from '../components/Suggestions';

import { useSelector } from 'react-redux';


export default function Sitbar () {
    var _lang_index = useSelector((state) => state.lang.value);
    return (
       <>
       {/* bg-light */}
        <aside className=" p-3 rounded-2">
            <Suggestions/>
            <div className="text-secondary">
                <hr/>
            </div>
            <AboutProgram />
        </aside>
       </>
    )
}