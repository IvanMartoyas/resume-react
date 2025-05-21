 import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './_Header';
import Footer from './_Footer';
import Sitbar from './_Sitbar';

import Home from '../pages/Home';
import Education from '../pages/Education';
import Works from '../pages/Works';
import NotFond from '../pages/404';
import { useState } from 'react';

export default function MainLayout () {

    const [isSitbar, setSitbar] = useState(true);
    
    //setSitbar(true);    

    return(
        <>
            <BrowserRouter>
                <div className="wrapper">
                    <Header isSitbar={isSitbar} setSitbar={setSitbar} />

                    <div className={isSitbar? 'mt-4 mb-4 main_sitbar container': 'mt-4 mb-4 container'}>
                        {isSitbar? <Sitbar/> : ''}
                        <main className="card p-3">
                            <Routes>
                                <Route exact path='/' element={<Home/>}/>
                                <Route exact path='/works' element={<Works/>}/>
                                <Route exact path='/education' element={<Education/>}/>
                                <Route exact path='/*' element={<NotFond/>}/>
                            </Routes>
                        </main>
                        
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}
