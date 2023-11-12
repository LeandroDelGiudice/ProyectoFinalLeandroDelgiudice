/* import"../main.css" */
import carrito from "../assets/cart-icon.png";

export const CartWidget = () =>{
    return ( 
        <>
        <img src={carrito} alt="carrito de compras" width= {40} />
            <span>0</span>
        </>
            
     );
};