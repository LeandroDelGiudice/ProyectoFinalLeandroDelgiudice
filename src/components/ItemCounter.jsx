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
        <Button
          variant="light"
          onClick={handleDecreaseCount}
          className="font-weight-bold"
        >
          -
        </Button>
        <span className="mx-3 h4">{count}</span>
        <Button
          variant="light"
          onClick={handleIncreaseCount}
          className="font-weight-bold"
        >
          +
        </Button>
      </div>
      <Button variant="dark" onClick={handleAdd}>
        Agregar al Carro
      </Button>
    </div>
  );
};
