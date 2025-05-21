import { base, skills } from '../model/resume_model'
import {  NavLink, Router } from 'react-router-dom';
import Cheack_lang from '../components/cheack-lang';

import { useSelector } from 'react-redux';

export default function Header ({isSitbar, setSitbar}) {
    var _lang_index = useSelector((state) => state.lang.value);

    const ROUTES  = [
        {
            name: ['Главная', 'Home'],
            link: '/',
        },
        {
            name: ['Образование', 'Education'],
            link: '/education',
        },
        {
            name: ['Работа', 'Works'],
            link: '/works',
        },
    ]

    let sitbar = {
        add: ['Добавить сайтбар','Add sitbar'],
        delete: ['Скрыть сайтбар','Hide sitbar']
    }
    const changeSitbar = () => {
        setSitbar(!isSitbar);
    }

    return (
        <header className='navbar-expand-lg navbar-light bg-light border-bottom'>
            <div className="container">
                <nav className="navbar pb-3 pb-lg-2">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">{base.resume_titel[_lang_index]}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuButton" aria-controls="menuButton" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="menuButton">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {ROUTES.map(item => <li key={item.link} className="nav-item"><NavLink className="nav-link" key={item.link} to={item.link}>{item.name[_lang_index]}</NavLink></li>)}
                            </ul>
                            <div className="d-flex gap-3">
                                <button className='btn btn-outline-dark' onClick={()=>changeSitbar()}>{isSitbar? <i class="bi bi-box-arrow-left"></i> : <i class="bi bi-box-arrow-right"></i>}</button>
                                <Cheack_lang></Cheack_lang>
                                
                            </div>
                           
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}