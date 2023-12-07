import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout.jsx";
import Trashcan from "../assets/TrashCan.png";

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
        <h2 style={{ fontSize: "40px" }}>Su carro está vacío</h2>
        <br />
        <button
          style={{
            fontWeight: 400,
            color: "white",
            backgroundColor: "black",
            fontSize: "20px",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/")}
        >
          Volver a Inicio
        </button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>Carro</h1>
      <Table>
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
              <td style={{ fontSize: "26px" }}>{item.title}</td>
              <td style={{ fontSize: "26px" }}>{item.quantity}</td>
              <td>
                <img src={item.pictureUrl} width={300} alt={item.title} />
              </td>
              <td style={{ fontSize: "26px" }}>{item.price}</td>
              <td>
                <img
                  src={Trashcan}
                  alt="Trashcan"
                  className="img-fluid mt-5"
                  style={{ width: "70px", height: "70px", cursor: "pointer" }}
                  onClick={() => onRemove(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ fontSize: "30px" }}>Total: {total} </td>
          </tr>
        </tfoot>
      </Table>
      <button
        style={{
          fontWeight: 400,
          color: "white",
          backgroundColor: "black",
          fontSize: "20px",
          borderRadius: "8px",
        }}
        onClick={clear}
      >
        Vaciar carro
      </button>
      <hr />
      <Checkout total={total} clear={clear} items={items} />
    </Container>
  );
};
