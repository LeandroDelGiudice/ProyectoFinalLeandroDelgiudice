import { useEffect, useState } from "react";
/* import "../main.css"; */
import  {Container}  from "react-bootstrap";
import { parts } from "../assets/data/parts.js";
import { ItemList } from "./ItemList.jsx";
export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(parts);
      }, 2000);
    });
    mypromise.then((response) => setItems(response));
  }, []);
  console.log(items);

  return( 
    <Container className="mt-4">
  {props.greeting}
  <ItemList items={items} />
    </Container>
     );
  };
/* import React, { useEffect, useState } from "react";
import "../main.css";
import { parts } from "../assets/data/parts";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = () => {
      setTimeout(() => {
        if (isMounted) {
          setItems(parts);
        }
      }, 2000);
    };

    fetchData();

    return () => {
      // Cleanup function to set isMounted to false when component unmounts
      isMounted = false;
    };
  }, []);

  console.log(items);

  return <div className="item-list-container"> {props.greeting} </div>;
}; */
