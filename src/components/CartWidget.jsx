import"../main.css"
import carrito from "../assets/cart-icon.png";

export const CartWidget = () =>{
    return ( 
        <a href="#"className="nav_car">
            <img src={carrito} alt="carrito de compras" />
            <p>0</p>
        </a>
     )
};