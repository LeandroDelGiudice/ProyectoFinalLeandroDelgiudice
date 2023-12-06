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
  const [validEmail, setValidEmail] = useState(true); 
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value,
    }));

  
    if (name === "email") {
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValidEmail(emailRegex.test(value));
    }
  };

  const sendOrder = () => {
    if (!validEmail || !buyer.name || !buyer.phone) {
      alert("Por favor, complete todos los campos del formulario y asegúrese de que el correo electrónico sea válido.");
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
        navigate("/");
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
            isInvalid={!validEmail} 
          />
          <Form.Control.Feedback type="invalid">
            El correo electrónico no es válido.
          </Form.Control.Feedback>
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