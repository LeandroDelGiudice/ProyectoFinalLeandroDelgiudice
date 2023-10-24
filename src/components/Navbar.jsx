 import {CartWidget } from "./cartWidget";
 import "../main.css"
 export const Navbar = () => {
  return (
    <nav>
      <div>Repuestos usados BMW</div>
      <ul>
        <li><a href="">Motores</a></li>
        <li><a href="">Cajas</a></li>
        <li><a href="">Diferenciales</a></li>
      </ul>
      < CartWidget />
    </nav>
    
  );
 }; 
