import usa_flag from '../assets/imgaes/langs/usa_flag.png';
import russia_flag from '../assets/imgaes/langs/russia_flag.png';

import {useState} from "react";

import { useSelector, useDispatch } from 'react-redux';
import {setLang} from '../store/_lang.js';
  


const langs = [
    {
        slug: 'RU',
        title: 'Русский',
        image: russia_flag
    },
    {
        slug: 'US',
        title: 'English',
        image: usa_flag
    },
]

export default function Cheack_lang() {

    var _lang_index = useSelector((state) => state.lang.value);
    const dispatch = useDispatch();

    const [flag, setFlag] = useState(false);
    const [selectLang, setselectLang] = useState(langs[_lang_index]);
    

    const setActiveLang = (lang, index) => {
        setselectLang(lang);
        dispatch(setLang(index));
        console.log('_lang_index ',_lang_index)
        
    }
    const handleOpen = () => {
        setFlag(!flag);
    };

    return (
        <>
            <div className="lang">
                <div className="lang__select bg-secondary" onClick={handleOpen}>
                    <img src={selectLang.image} alt={selectLang.slug} title={selectLang.title} />
                </div>
                { flag? <div className="lang__list card" onClick={handleOpen}>
                    {langs.map((lang, index) => <div key={lang.slug} className="lang__element" onClick={()=>setActiveLang(lang, index)}>{lang.title}</div> ) }
                </div>
                : ''
                }
            </div>
        </>
    )
}