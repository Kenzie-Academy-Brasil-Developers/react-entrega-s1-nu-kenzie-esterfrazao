import "./inicialPage.css";

function InicialPage({ callback }) {
  return (
    <>
      <button onClick={callback}>Iniciar</button>
    </>
  );
}

export default InicialPage;
