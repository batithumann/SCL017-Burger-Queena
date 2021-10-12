import React from "react";
import data from "../Data/data.json"
import { useState } from "react";
import Product from "./Product";


export default function WaiterNavBar(props) {
    const {onAdd} =props;
    const dataBreakfast = data.breakfast;
    const breakfastInnit = data.breakfastInnit;
    const [dataActual, setDataActual] = useState(data.breakfastInnit);
    const mostrarDesayuno = () => {
        setDataActual(dataBreakfast);
    };

    return (
        <main id="waiterViewContainer">
                <div className = "navBarMenu">
                    {dataActual === breakfastInnit &&
                        <button onClick={mostrarDesayuno} className="btn btn-dark btn-lg col-12 " > 
                            DESAYUNO
                        </button>  } 
                        {dataActual === breakfastInnit &&
                        <button onClick={mostrarDesayuno} className="btn btn-dark btn-lg  col-12" disabled> 
                            ALMUERZO / CENA
                        </button> }
                        {dataActual === breakfastInnit &&
                        <button onClick={mostrarDesayuno}className="btn btn-dark btn-lg col-12 " disabled> 
                            VER PEDIDOS
                        </button> }
                        {dataActual === breakfastInnit &&
                        <button onClick={mostrarDesayuno} className="btn btn-dark btn-lg col-12" disabled> 
                            MENÚ PRINCIPAL
                        </button>}
                </div>
            <div className="menu">
                {dataActual.map((product) => (
                    <div  className="breakfastMenu ">
                     
                            <Product key={product.id} product={product} onAdd = {onAdd} >
                            </Product>

                    </div>
                ))}
            </div>
            <div>
    
            </div>
        </main>


    );
}
