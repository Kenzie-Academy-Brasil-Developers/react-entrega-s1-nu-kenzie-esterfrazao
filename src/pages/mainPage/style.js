import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 16vh;

  background: #f8f9fa;
  box-shadow: 0px 4px 32px -12px #00000040;

  @media screen and (min-width: 426px) {
    justify-content: space-between;
    padding: 0 10vw;
  }

  @media screen and (min-width: 769px) {
    padding: 0 12vw;
    width: 98vw;
  }
`;

export const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;

  border-radius: 8px;
  border: 1.4px solid #ffffff00;

  padding: 15px;
  background-color: #e9ecef;
  color: #868e96;

  font-family: "Nunito";
  font-size: 14px;

  :hover {
    background-color: #868e96;
    color: #f8f9fa;
    cursor: pointer;
  }

  :focus {
    background-color: #fd377e;
    color: #ffffff;
  }
  @media screen and (min-width: 426px) {
    padding: ${({ filterAll }) => (filterAll ? "10.5px 15px" : "15px")};
    width: ${({ width }) => (width ? width : "auto")};
  }
`;

export const Main = styled.main`
  overflow-y: auto;

  width: 100vw;
  height: 84vh;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 426px) {
    flex-direction: row;
  }

  @media screen and (min-width: 769px) {
    justify-content: space-around;
    width: 86vw;
    margin: 10px auto;
  }
`;

export const FormContainer = styled.section`
  width: 95%;

  @media screen and (min-width: 426px) {
    width: 48%;
    margin-right: 20px;
  }

  @media screen and (min-width: 769px) {
    max-width: 363px;
    margin-right: 2.5vw;
  }
`;

export const TransactionsContainer = styled.section`
  width: 100%;

  @media screen and (min-width: 426px) {
    width: 50%;
  }
`;

export const TransactionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  h3 {
    font-weight: 700;
    font-size: 16px;

    color: #212529;
  }
`;

export const ButtonsContainer = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-around;

  box-sizing: content-box;

  button {
    max-width: 69px;
    max-height: 40px;

    padding: 5px;
    margin: 2px;

    font-size: 14px;
    font-weight: 600;
    text-align: start;
  }

  @media screen and (min-width: 426px) {
    button {
      height: 40px;
      box-sizing: content-box;
      max-width: 69px;
      padding: 0px 12px;
      text-align: center;
    }
  }
`;
