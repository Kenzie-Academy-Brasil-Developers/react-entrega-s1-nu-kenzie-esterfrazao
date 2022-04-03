import logo from "./Nu-Kenzie.svg";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function MainPage({ callback }) {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <header className="mainHeader">
        <img alt="Nu Kenzie Logo" src={logo} />
        <button className="unactiveButton" onClick={callback}>
          Inicio
        </button>
      </header>
      <main className="main">
        <div>
          <Form list={listTransactions} setList={setListTransactions} />
          <TotalMoney list={listTransactions} />
        </div>
        <section>
          <div className="listHeader">
            <h3>Resumo financeiro</h3>
            <button className="unactiveButton">Todos</button>
            <button className="unactiveButton">Entradas</button>
            <button className="unactiveButton">Despesas</button>
          </div>
          <List list={listTransactions} setList={setListTransactions} />
        </section>
      </main>
    </>
  );
}

export default MainPage;
