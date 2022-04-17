import "./style.css";

const TotalMoney = ({ list }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const total = formatter.format(
    list.reduce((previous, current) => {
      return Number(current.value) + previous;
    }, 0)
  );

  return (
    <section className="totalMoney">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3 className="totalMoneyValue">{total}</h3>
    </section>
  );
};

export default TotalMoney;
