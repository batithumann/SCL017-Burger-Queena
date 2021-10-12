import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import logo from "../Components/WaiterView/CSS/Logo.png"
import "../Components/WaiterView/CSS/home.css"

export default function Home(props){
    return(
        <Fragment>
            <div className = "container">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className = "buttonsContainer">
            <Link className= "btn btn-dark btn-lg col-5" to="waiterview">
                MESA
            </Link>
            <Link className= "btn btn-dark btn-lg col-5" to="">
                COCINA
            </Link>
           
            </div>
            </div>
            </Fragment>
    );
};
