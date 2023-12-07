import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const firebaseConfig = {
  apiKey: "AIzaSyCqEjnDbSpbk18UmJmU-E-rX9Obi2zkDhE",
  authDomain: "repuestosusadosbmw.firebaseapp.com",
  projectId: "repuestosusadosbmw",
  storageBucket: "repuestosusadosbmw.appspot.com",
  messagingSenderId: "49621799913",
  appId: "1:49621799913:web:74f41fb14bec9f35fbf178",
};

const app = initializeApp(firebaseConfig);
