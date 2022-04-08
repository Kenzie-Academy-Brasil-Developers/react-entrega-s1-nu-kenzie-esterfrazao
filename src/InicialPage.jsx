import "./inicialPage.css";
import capa from "./capa.svg";
import logo from "./Nu-Kenzie-Branco.svg";

function InicialPage({ callback }) {
  return (
    <section className="inicialPage">
      <div className="containerPressentation">
        <div className="presentation">
          <img alt="logo" src={logo} className="logo" />
          <h1 className="slogan">Centralize o controle das suas finanças</h1>
          <p className="presentationDetail">de forma rápida e segura</p>
          <button className="buttonGoToMainPage" onClick={callback}>
            Iniciar
          </button>
        </div>
        <img alt="imagem de capa" src={capa} className="capa" />
      </div>
    </section>
  );
}

export default InicialPage;
