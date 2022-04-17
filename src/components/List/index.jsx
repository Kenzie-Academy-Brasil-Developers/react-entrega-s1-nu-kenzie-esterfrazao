import "./style.css";
import Card from "../Card";

const List = ({ list, setList }) => {
  const deleteItem = (item) => {
    const newList = list.filter((elem) => elem !== item);
    setList(newList);
  };

  return (
    <div className="cardsList">
      {list.map((item, index) => (
        <Card key={index} transaction={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default List;
