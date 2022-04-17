import "./style.css";
import { Icon } from "@iconify/react";

const Card = ({ transaction, deleteItem }) => {
  const { description, value, type } = transaction;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div
      className={
        type === "Despesa"
          ? "transactionCard grayBorderCard"
          : "transactionCard greenBorderCard"
      }
    >
      <div>
        <h3>{description}</h3>
        <span className="transactionType">{type}</span>
      </div>
      <span>{formatter.format(Math.abs(value))}</span>
      <button className="trashCan" onClick={() => deleteItem(transaction)}>
        <Icon icon="fa-solid:trash" />
      </button>
    </div>
  );
};

export default Card;
