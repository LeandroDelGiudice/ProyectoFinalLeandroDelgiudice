import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout.jsx"; 

export const Cart = () => {
  const { clear, items, onRemove } = useContext(CartContext);
  const navigate = useNavigate();
  const total = items.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.price,
    0
  );

  if (!items.length) {
    return (
      <Container className="mt-4">
        <h2>Su carro está vacío</h2>
        <button onClick={() => navigate("/")}>Volver a Inicio</button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>Carro</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <img src={item.pictureUrl} width={300} alt={item.title} />
              </td>
              <td>{item.price}</td>
              <td onClick={() => onRemove(item.id)}>x</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total: {total} </td>
          </tr>
        </tfoot>
      </Table>
      <button onClick={clear}> Vaciar carro </button>
      <hr />
      <Checkout total={total} clear={clear} items={items} />
    </Container>
  );
};
