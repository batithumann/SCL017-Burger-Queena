import React, { Fragment } from 'react';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce ((a, c) => a + c.price * c.qty, 0);
    const tipPrice = itemsPrice * 0.10;
    const totalPrice = itemsPrice + tipPrice;
    return (
        <aside className="basket border border-dark">
            
            <h2>Detalle Pedido</h2>
            <div >
                {cartItems.length === 0 && <div> Ingresa tu pedido</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.item}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className = "col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="row ">
                <div className = "col-2">Consumo</div>
                <div className="col-1 text right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                <div className = "col-2">Propina</div>
                <div className="col-1 text right">${tipPrice.toFixed(2)}</div>
                </div>
                <hr></hr>
                <div className="row">
                <div className = "col-2"><strong>Total</strong></div>
                <div className="col-1 text right">${totalPrice.toFixed(2)}</div>
                </div>
                </>
            )}
           
        </aside>
    );

}