
import React from "react";
import "../header/header.css";
export default class Header extends React.Component {
    constructor(props:any){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            <div className="header-main">
               <div className="header-name">Biriyani Bay</div> 
               <br></br>
                <div className="header">
                    
                    <div >  <button>Home</button></div>
                    <div ></div>
                    <div ><button>Menu</button></div>
                    <div ><button>Contact Us</button></div>
                    <div ><button>Feedback</button></div>
                    <div ></div>
                </div>
            </div>
        )
    }
}