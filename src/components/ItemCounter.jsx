/* import { useState } from "react";
export const ItemCounter = ({ onAdd, stock, initial }) => {
  const[count, setCount] = useState(initial);
  const handleIncreaseCount = () =>{
    if (stock > count) {
    setCount((prev)=>prev +1);
    }
  };
  const handleDecreaseCount = () =>{
    if (count > 1) {
      setCount((prev)=> prev -1);
    }
    };
   const handleAdd = () =>{
    onAdd(count);
    setCount(initial);
   } ;
      
  return (
    <>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ fontSize: 30 }} onClick= {handleDecreaseCount} >- </div>
        <mark> {count} </mark> 
        <div style={{ fontSize: 30 }} onClick= {handleIncreaseCount}>+</div>
      </div>
      <br />
      <button onClick={handleAdd}> Agregar al Carro</button>
    </>
  );
}
 */
import { useState } from "react";
import { Button } from "react-bootstrap";

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleIncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Button variant="light" onClick={handleDecreaseCount} className="font-weight-bold">
          -
        </Button>
        <span className="mx-3 h4">{count}</span>
        <Button variant="light" onClick={handleIncreaseCount} className="font-weight-bold">
          +
        </Button>
      </div>
      <Button variant="primary" onClick={handleAdd}>
        Agregar al Carro
      </Button>
    </div>
  );
};