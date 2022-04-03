import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([])

  return (
    <main className="App">
      <header>
      </header>
      <div>
        <Form list={listTransactions} setList={setListTransactions} />
        <TotalMoney list={listTransactions}/>
      </div>
      <List list={listTransactions} setList={setListTransactions} />
    </main>
  );
}

export default App;
