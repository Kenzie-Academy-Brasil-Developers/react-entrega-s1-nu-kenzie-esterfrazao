import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: #212529;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 65%;
  height: 593px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 15%;

  @media screen and (min-width: 426px) {
    padding-left: 0;
  }
`;

export const Cover = styled.img`
  display: none;

  @media screen and (min-width: 426px) {
    display: block;
    width: 55%;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 60%;
  width: 35%;

  img {
    width: 100%;
  }

  h1 {
    font-family: "Nunito";
    font-weight: 800;
    font-size: 38px;
    line-height: 48px;
  }

  p {
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
  }

  button {
    font-family: "Inter";
    font-weight: 500;
    font-size: 16px;

    padding: 14.5px 97px;

    background-color: #fd377e;
    color: inherit;
  }

  @media screen and (min-width: 426px) {
    img {
      width: 46%;
    }
  }
`;
