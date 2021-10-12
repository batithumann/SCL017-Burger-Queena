import Header from "./WaiterView/Header";
import "../Components/WaiterView/CSS/waiterView.css"
import WaiterNavBar from "./WaiterView/WaiterNavBar";
import Basket from "./WaiterView/Basket";
import { useState } from "react";
import ButtonMenu from "./WaiterView/ButtonMenu";
import SendOrderButton from "./WaiterView/SendOrderButton";





const WaiterView = () => {
    const [cartItems, setCartItems] = useState([]);
    const onAdd =(product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist) {
            setCartItems(cartItems.map(x=> x.id === product.id ? {...exist, qty: exist.qty +1} :x
                )
                );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1}]);
        }
    };
    const onRemove = ( product ) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        }else{
          setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty -1 } :x 
            )
          );
        }
      };
    return (
        <div className= "waiterViewContainer">
            <Header/>
            <hr></hr>
            <div className= "menuAndBasket">
            <div className= "waiterNavBarAndButtonMenu ">
                <WaiterNavBar onAdd ={onAdd}/>
                <div>
            <ButtonMenu/>
            </div>
            </div>
            <div className="basketAndSendOrderButton border border-dark">
            <Basket onAdd={onAdd} 
                    onRemove={onRemove}
                    cartItems ={cartItems}/>
                    <div>
            <SendOrderButton/>
            </div>
            </div>
            </div>
            </div>
        
    );
};

export default WaiterView;
