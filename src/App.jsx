import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext.jsx";
import "./app.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";
import { Cart } from "./components/cart.jsx";
import { Navbar } from "react-bootstrap";
import { CustomNavbar } from "./components/Navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

function App() {
  return (
    <div>
      <CartProvider>
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
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<div>Checkout</div>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <WhatsAppButton />
    </div>
  );
}

export default App;
