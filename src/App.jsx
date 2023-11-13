import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { CustomNavbar } from "./components/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";

import "./app.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <CustomNavbar />
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Repuestos en stock" />}
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Repuestos en stock" />}
        />
        <Route path="/items/:id" element={ItemDetailContainer} />
        <Route path="/cart" element={<div>Cart</div>} />
        <Route path="/checkout" element={<div>Checkout</div>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;