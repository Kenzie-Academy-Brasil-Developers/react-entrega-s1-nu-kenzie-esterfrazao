function TotalMoney({ list }) {
  const total = list.reduce((previous, current) => {
    return current.value + previous;
  }, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="totalMoney">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3>{formatter.format(total)}</h3>
    </section>
  );
}

export default TotalMoney;
