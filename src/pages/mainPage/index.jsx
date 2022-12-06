import logo from "./Nu-Kenzie.svg";

import { useState } from "react";

import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import EmptyList from "../../components/EmptyList";
import {
  Button,
  ButtonsContainer,
  FormContainer,
  Header,
  Main,
  TransactionsContainer,
  TransactionsHeader,
} from "./style";

const MainPage = ({ changePage }) => {
  const [transactionList, setTransactionList] = useState([]);
  const [filter, setFilter] = useState("Todos");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Header>
        <img alt="Nu Kenzie Logo" src={logo} />
        <Button onClick={changePage}>Inicio</Button>
      </Header>
      <Main>
        <FormContainer>
          <Form list={transactionList} setList={setTransactionList} />
          <TotalMoney list={transactionList} />
        </FormContainer>
        <TransactionsContainer>
          <TransactionsHeader className="listHeader">
            <h3>Resumo financeiro</h3>
            <ButtonsContainer className="buttonsList">
              <Button onClick={handleFilter} value="Todos" filterAll>
                Todos
              </Button>
              <Button onClick={handleFilter} value="Entrada">
                Entradas
              </Button>
              <Button onClick={handleFilter} value="Despesa" width="92px">
                Despesas
              </Button>
            </ButtonsContainer>
          </TransactionsHeader>
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
        </TransactionsContainer>
      </Main>
    </>
  );
};

export default MainPage;
