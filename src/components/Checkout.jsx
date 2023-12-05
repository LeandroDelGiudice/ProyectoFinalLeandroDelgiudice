/* import React, {  useState } from "react";
import {  Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  email: "",
  name: "",
  phone: "",
};

const Checkout = ({ total, clear, items }) => {
  const [buyer, setBuyer] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setBuyer((buyer) => {
      return {
        ...buyer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendOrder = () => {
    if (!buyer.email || !buyer.name || !buyer.phone) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
      }
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden " + id + " ha sido completada");
        setBuyer(initialValues);
        clear();
      }
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={buyer.email}
          onChange={handleChange}
          name="email"
          placeholder=" E-mail"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={buyer.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={buyer.phone}
          onChange={handleChange}
          name="phone"
          placeholder="Phone"
          required
        />
      </Form.Group>
      <Button variant="primary" onClick={sendOrder}>
        Enviar
      </Button>
    </Form>
  );
};

export default Checkout; */
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  email: "",
  name: "",
  phone: "",
};

const Checkout = ({ total, clear, items }) => {
  const [buyer, setBuyer] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value,
    }));
  };

  const sendOrder = () => {
    if (!buyer.email || !buyer.name || !buyer.phone) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden " + id + " ha sido completada");
        setBuyer(initialValues);
        clear();
        navigate("/"); // Redirige a la página principal u otra página después de enviar la orden
      }
    });
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            placeholder="E-mail"
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={buyer.name}
            onChange={handleChange}
            name="name"
            placeholder="Name"
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Phone"
            required
          />
        </Form.Group>
      </Row>
      <Button variant="primary" onClick={sendOrder}>
        Enviar
      </Button>
    </Form>
  );
};

export default Checkout;