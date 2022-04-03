import "./style.css";

function Card({ transaction, callback }) {
  const { description, value, type } = transaction;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div
      className={
        type === "Depesa"
          ? "transactionCard grayBorderCard"
          : "transactionCard greenBorderCard"
      }
    >
      <div>
        <h3>{description}</h3>
        <span className="transactionType">{type}</span>
      </div>
      <span>{formatter.format(Math.abs(value))}</span>
      <button onClick={() => callback(transaction)} className="trashCan">
        Apagar
      </button>
    </div>
  );
}

export default Card;
