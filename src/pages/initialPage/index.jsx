import coverImg from "./coverImg.svg";
import logo from "./Nu-Kenzie-Branco.svg";
import { Container, Content, Cover, Introduction } from "./style";

const InicialPage = ({ changePage }) => {
  return (
    <Container>
      <Content>
        <Introduction>
          <img alt="logo" src={logo} />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={changePage}>Iniciar</button>
        </Introduction>
        <Cover alt="app cover" src={coverImg} />
      </Content>
    </Container>
  );
};

export default InicialPage;
