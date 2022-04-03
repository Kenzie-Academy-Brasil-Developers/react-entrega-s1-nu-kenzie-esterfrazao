import "./style.css";

function Card({ transaction, callback }) {
  const { description, value, type } = transaction;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="transactionCard">
      <div>
        <h3>{description}</h3>
        <span className="transactionType">{type}</span>
      </div>
      <span>{formatter.format(value)}</span>
      <button onClick={() => callback(transaction)} className="trashCan">
        Apagar
      </button>
    </div>
  );
}

export default Card;
