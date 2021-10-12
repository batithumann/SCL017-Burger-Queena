import React from 'react'

export default function Product(props) {
    const {product , onAdd} = props;
    return (
        <div className="row">
                <button onClick={() => onAdd(product)} className="buttonMenu btn btn-dark btn-lg "> {product.item}</button>
        </div>
    )
}
