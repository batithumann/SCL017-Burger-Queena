import React from "react";

export default function Header({setMesa}) {

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className = "navBarItems">   
            <div className="container-fluid">
                <input className = "form-select" type="date"/>
                <select className="form-select" id="inputGroupSelect02">
                    <option selected>Nombre Mesero(a)</option>
                    <option value="1">Juan Carlos Perez</option>
                    <option value="2">Anita María Alvarado</option>
                    <option value="3">Alan Brito</option>
                </select>
                <select className="form-select" id="inputGroupSelect02">
                    <option selected>Nº Mesa</option>
                    <option onClick={() => setMesa('Mesa 1')}>Mesa 1</option>
                    <option onClick={() => setMesa('Mesa 2')}>Mesa 2</option>
                    <option onClick={() => setMesa('Mesa 3')}>Mesa 3</option>
                </select>
            </div>
            </div>
       
      </nav>
    );
}

