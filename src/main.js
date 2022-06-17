import "./main.css"
import "./x.css"
import image from "./images/obi.jpg";
import { useEffect } from "react";
import { scrollEffect } from "./animations/animation.js";

export function Main(){
    //use scroll effect to make the image and name move
    useEffect(() => {
        scrollEffect();
        return () => {
            window.removeEventListener("scroll", scrollEffect);
        }
    }
    , []);
    return(
        <div className="main">
            <div className="my-content">
                <Myimage link={image}/>
                <Nametext name="Sergio Portero Garcia"/>
            </div>
            <div className="x-content">
            </div>
        </div>
    );
}

function Myimage(props){
    return(
        <div id="image-profile" className="image-container">
            <img className="my-image" src={props.link} alt="profile"/>
        </div>
    );
}

function Nametext(props){
    return(
        <div id="name" className="name-text">
            <span className="name">{props.name}</span>
            <span className="description">Software Developer Web Developer</span>
        </div>
    );
}