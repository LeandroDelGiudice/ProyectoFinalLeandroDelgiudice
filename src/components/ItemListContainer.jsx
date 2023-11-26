import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { parts } from "../assets/data/parts";
import { ItemList } from "./ItemList";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  getDocs,
  where,
  limit,
  query,
} from "firebase/firestore";
export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  /* useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", "xk0LdQUVY4j4HdLgYfbk");
    getDoc(refDoc). then ((snapshot) => {
      console.log({ id: snapshot.id,  ...snapshot.data()});

    });
  },[]); */

  /* useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "items");
    getDocs(refCollection). then ((snapshot) => {
      if(snapshot.size === 0) console.log(" no results");
      else
      console.log(
       snapshot.docs.map ((doc) =>{
        return { id: doc.id,  ...doc.data()};
       })
      );
    });
  },[]); */
  useEffect(() => {
    const db = getFirestore();
    const q = query(
      collection(db, "items"),
      where("categoryId", "==", "gorros")
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) console.log(" no results");
      else
        console.log(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, []);

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(parts);
      }, 2000);
    });

    mypromise.then((response) => {
      if (!id) {
        setItems(response);
      } else {
        const filterByCategory = response.filter(
          (item) => item.category === id
        );
        setItems(filterByCategory);
      }
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      {items ? <ItemList items={items} /> : <>Loading</>}
    </Container>
  );
};
