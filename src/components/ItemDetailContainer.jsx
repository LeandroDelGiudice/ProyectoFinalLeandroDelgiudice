import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { Container } from "react-bootstrap";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  return (
    <Container className="mt-1">
      {item ? <ItemDetail item={item} /> : <>loading</>}
    </Container>
  );
};
