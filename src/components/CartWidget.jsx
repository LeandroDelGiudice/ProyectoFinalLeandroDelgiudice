import carrito from "../assets/cart-icon.png";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () =>{
    const {items} = useContext(CartContext);
    const total = items.reduce(
        (acumulador, valorActual)=> acumulador + valorActual.quantity,0
        );
    return ( 
        <>
        <Link to="/cart" >
        <img src={carrito} alt="carrito de compras" width= {40} />
            <span >{total}</span>
            </Link>
        </>
            
     );
};