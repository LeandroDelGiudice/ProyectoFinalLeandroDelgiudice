/* import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "542213993936"; 

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const buttonStyles = {
    backgroundColor: "#25D366", 
    color: "#fff", 
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    outline: "none",
  };

  return (
    <button style={buttonStyles} onClick={handleWhatsAppClick}>
      <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "5px" }} />
      Chatea por WhatsApp
    </button>
  );
};

export default WhatsAppButton; */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "542213993936";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const buttonStyles = {
    position: "fixed",
    bottom: "20px", // Ajusta la distancia desde la parte inferior según tus necesidades
    right: "20px", // Ajusta la distancia desde la derecha según tus necesidades
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    outline: "none",
  };

  return (
    <button style={buttonStyles} onClick={handleWhatsAppClick}>
      <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "5px" }} />
      Chatea por WhatsApp
    </button>
  );
};

export default WhatsAppButton;