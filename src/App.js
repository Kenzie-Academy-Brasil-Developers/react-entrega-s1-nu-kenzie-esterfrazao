import './App.css';
import {useState} from 'react';
import MainPage from './MainPage'
import InicialPage from './InicialPage';

function App() {

  const [inicialPage, setInicialPage] = useState(true)

  const changePage = () => {
    inicialPage? setInicialPage(false) : setInicialPage(true);
  }
  
  return (
    <>
      {inicialPage ? <InicialPage callback={changePage}/> : <MainPage callback={changePage}/>}
    </>
  );
}

export default App;
