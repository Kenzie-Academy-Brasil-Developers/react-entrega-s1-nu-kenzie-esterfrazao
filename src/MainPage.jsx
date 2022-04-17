import logo from "./Nu-Kenzie.svg";

import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import EmptyList from "./components/EmptyList";

const MainPage = ({ changePage }) => {
  const [transactionList, setTransactionList] = useState([]);
  const [filter, setFilter] = useState("Todos");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <header className="mainHeader">
        <img alt="Nu Kenzie Logo" src={logo} />
        <button className="buttons" onClick={changePage}>
          Inicio
        </button>
      </header>
      <main className="main">
        <section className="transactionsInfo">
          <Form list={transactionList} setList={setTransactionList} />
          <TotalMoney list={transactionList} />
        </section>
        <section className="listSection">
          <div className="listHeader">
            <h3>Resumo financeiro</h3>
            <div className="buttonsList">
              <button
                onClick={handleFilter}
                value="Todos"
                className="buttons filtrarTodos"
              >
                Todos
              </button>
              <button
                onClick={handleFilter}
                value="Entrada"
                className="buttons filtrarEntrada"
              >
                Entradas
              </button>
              <button
                onClick={handleFilter}
                value="Despesa"
                className="buttons filtrarDespesas"
              >
                Despesas
              </button>
            </div>
          </div>
          {transactionList.length === 0 ? (
            <EmptyList />
          ) : filter === "Todos" ? (
            <List list={transactionList} setList={setTransactionList} />
          ) : (
            <List
              list={transactionList.filter((item) => item.type === filter)}
              setList={setTransactionList}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default MainPage;
