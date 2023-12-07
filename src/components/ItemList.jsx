import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center m-2">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
