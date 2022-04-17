import { useState } from "react";
import "./style.css";

const Form = ({ list, setList }) => {
  const [description, setDescription] = useState("Sem Descrição");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const transaction = {};

    transaction.description = description;
    transaction.type = type;
    transaction.value = type === "Despesa" ? -value : value;

    setList([...list, transaction]);
  };

  return (
    <form className="transactionForm" onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
      />
      <span>Ex: Compra de roupas</span>
      <div className="valueTypeDiv">
        <div className="minorDivs">
          <label htmlFor="value">Valor</label>
          <div className="inputValue">
            <input
              onChange={(e) => setValue(e.target.value)}
              step="0.01"
              type="number"
              id="value"
              placeholder="1"
            />
            <p>R$</p>
          </div>
        </div>
        <div className="minorDivs">
          <label htmlFor="type">Tipo de valor</label>
          <select onChange={(e) => setType(e.target.value)} id="type">
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
