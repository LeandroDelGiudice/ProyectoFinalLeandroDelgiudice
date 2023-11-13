 export const ItemDetail =({item}) => {
    return (
        <>
        <h1>{item.title}</h1>
        <h2>precio: ${item.price}</h2>
        <h3>Detalle: {item.description}</h3>
        <img src = {item.pictureUrl}alt = {item.title}/>
        </>

    );
}; 
  
  
  
  
  