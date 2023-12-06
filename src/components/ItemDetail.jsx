import { useContext } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    onAdd(item, quantity);
  };

  return (
    <div className="container mt-2">
      <h1 className="display-5">{item.title}</h1>
      <h2 className="text-success">Precio: ${item.price}</h2>
      <p className="display-6">{item.description}</p>
      <img className="img-fluid mb-3" src={item.pictureUrl} alt={item.title} width={300} />
      <h2>Stock: {item.stock}</h2>
      <ItemCounter onAdd={handleAddToCart} stock={item.stock} initial={1} />
    </div>
  );
};
