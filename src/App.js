import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Form from './components/Form'
import List from './components/List'

function App() {

  const [listTransactions, setListTransactions] = useState([])

  return (
    <div className="App">
      <header>
      </header>
      <Form list={listTransactions} setList={setListTransactions} />
      <List list={listTransactions} setList={setListTransactions} />
    </div>
  );
}

export default App;
