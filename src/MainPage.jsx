import logo from "./Nu-Kenzie.svg";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import EmptyList from "./components/EmptyList";

function MainPage({ callback }) {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("Todos");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <header className="mainHeader">
        <img alt="Nu Kenzie Logo" src={logo} />
        <button className="unactiveButton" onClick={callback}>
          Inicio
        </button>
      </header>
      <main className="main">
        <section className="transactionsInfo">
          <Form list={listTransactions} setList={setListTransactions} />
          <TotalMoney list={listTransactions} />
        </section>
        <section className="listSection">
          <div className="listHeader">
            <h3>Resumo financeiro</h3>
            <div className="buttonsList">
              <button
                onClick={handleFilter}
                value="Todos"
                className="unactiveButton filtrarTodos"
              >
                Todos
              </button>
              <button
                onClick={handleFilter}
                value="Entrada"
                className="unactiveButton filtrarEntrada"
              >
                Entradas
              </button>
              <button
                onClick={handleFilter}
                value="Despesa"
                className="unactiveButton filtrarDespesas"
              >
                Despesas
              </button>
            </div>
          </div>
          {listTransactions.length === 0 ? (
            <EmptyList />
          ) : filter === "Todos" ? (
            <List list={listTransactions} setList={setListTransactions} />
          ) : (
            <List
              list={listTransactions.filter((item) => item.type === filter)}
              setList={setListTransactions}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default MainPage;
