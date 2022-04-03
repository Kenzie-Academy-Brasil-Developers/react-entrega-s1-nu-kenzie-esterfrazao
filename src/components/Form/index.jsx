import "./style.css";

class Transaction {
  constructor(description, type, value) {
    this.description = description;
    this.type = type;
    this.value = Number(value);
  }
}

function Form({ list, setList }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const info = [];
    const tipo = event.target.querySelector("select").value;

    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].tagName === "INPUT") {
        info.push(event.target[i].value);
      }
    }
    const [descricao, valor] = info;

    const newTransaction = new Transaction(descricao, tipo, valor);

    setList([...list, newTransaction]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
      />
      <small>Ex: Compra de roupas</small>
      <div>
        <label htmlFor="value">Valor</label>
        <input type="text" id="value" placeholder="1 R$" />
        <label htmlFor="tipo-valor">Tipo de valor</label>
        <select id="tipo-valor">
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
