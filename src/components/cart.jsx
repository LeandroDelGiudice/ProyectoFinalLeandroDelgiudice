import { useContext, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { getFirestore,collection, addDoc} from "firebase/firestore";

const initialValues={
  email: "",
  name: "",
  phone: "",

};

export const Cart = () => {
  const { clear, items, onRemove } = useContext(CartContext);
  const [buyer, setBuyer] = useState(
    initialValues
   );
  const navigate = useNavigate();
  const total = items.reduce(
    (acumulador, valorActual)=>
     acumulador + valorActual.quantity * valorActual.price,0
    );
  const handleChange =(event)=>{
    setBuyer(buyer => {
        return{
         ...buyer, 
         [event.target.name]: event.target.value,  
        };
    });
  };
  const sendOrder= ()=>{
    const order ={
      buyer,
      items,
      total: 13600,
      }

      const db= getFirestore();
      const orderCollection = collection(db,"orders");
      addDoc (orderCollection, order).then(({id})=>{
        if(id){
          alert("su orden" + id + "ha sido completada");
          setBuyer(initialValues);
          clear();
        }
      });
  };
  if (!items.length) {
    return (
      <Container classname="mt-4">
        <h2>Su carro esta vacio</h2>
        <button onClick={() => navigate("/")}>Volver a Inicio</button>
      </Container>
    );
  }
  return (
    <Container classname="mt-4">
      <h1>Carro</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>imagen</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
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
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            placeholder=" E-mail"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text" 
          value={buyer.name}
          onChange={handleChange} 
          name="name"
          placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>phone</Form.Label>
          <Form.Control 
          type="text" 
          value={buyer.phone}
          onChange={handleChange}
          name="phone"
          placeholder="Phone" />
        </Form.Group>
        <Button variant="primary" onClick = {sendOrder}>Enviar</Button>
      </Form>
    </Container>
  );
};
