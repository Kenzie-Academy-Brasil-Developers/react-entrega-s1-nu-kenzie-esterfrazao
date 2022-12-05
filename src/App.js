import "./App.css";

import { useState } from "react";

import MainPage from "./MainPage";
import InicialPage from "./InicialPage";
import GlobalStyle from "./styles/global";

const App = () => {
  const [inicialPage, setInicialPage] = useState(true);

  const changePage = () => {
    inicialPage ? setInicialPage(false) : setInicialPage(true);
  };

  return (
    <>
      <GlobalStyle />
      {inicialPage ? (
        <InicialPage changePage={changePage} />
      ) : (
        <MainPage changePage={changePage} />
      )}
    </>
  );
};

export default App;
