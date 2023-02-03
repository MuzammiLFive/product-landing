import React from 'react';
import './App.css';
import Header from './components/header/header';
import {Footer} from "./components/footer/footer";

import {
    Routes,
    Route
} from "react-router-dom";
import {Home} from "./components/contents/home/home";
import {Menu} from "./components/contents/menu/menu";
import {Feedback} from "./components/contents/feedback/feedback";
import {ContactUs} from "./components/contents/contact-us/contact-us";

export enum Pages {
    Home = "/",
    Menu = "/menu",
    Feedback = "/feedback",
    ContactUs = "/contact-us"
}

function App() {
    return (
        <>
            <div className="content">
                <Header/>
                <Routes>
                    <Route path={Pages.Home} element={<Home/>}></Route>
                    <Route path={Pages.Menu} element={<Menu/>}/>
                    <Route path={Pages.ContactUs} element={<ContactUs/>}/>
                    <Route path={Pages.Feedback} element={<Feedback/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    );
}

export default App;
