export const itemDetail =({item}) => {
    return (
        <>
        <h1>{item.title}</h1>
        <img src = {item.pictureUrl}/>
        </>

    );
};