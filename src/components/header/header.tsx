
import React from "react";
import "../header/header.css";
import {Link} from "react-router-dom";
import {Pages} from "../../App";

export default class Header extends React.Component {
    render(){
        return(
            <div className="header-main">
               <div className="header-name">Biriyani Bay</div>
               <br></br>
                <div className="header">
                    <div ><button><Link to={Pages.Home}>Home</Link></button></div>
                    <div ><button><Link to={Pages.Menu}>Menu</Link></button></div>
                    <div ><button><Link to={Pages.ContactUs}>Contact Us</Link></button></div>
                    <div ><button><Link to={Pages.Feedback}>Feedback</Link></button></div>
                    <div ></div>
                </div>
            </div>
        )
    }
}
