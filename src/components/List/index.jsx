import "./style.css";
import Card from "../Card";

function List({ list, setList }) {
  const eraseFromList = (item) => {
    const newList = list.filter((elem) => elem !== item);
    setList(newList);
  };

  return (
    <div>
      {list.map((item, index) => (
        <Card key={index} transaction={item} callback={eraseFromList} />
      ))}
    </div>
  );
}

export default List;
