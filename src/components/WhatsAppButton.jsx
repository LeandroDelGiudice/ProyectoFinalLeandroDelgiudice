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
    bottom: "20px", 
    right: "20px", 
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