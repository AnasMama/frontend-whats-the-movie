import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <NotFoundContainer>
      <h1>Oups !</h1>
      <img src="/src/assets/movie-404.png" alt="404 not found" />
      <span>Il semblerait que la page recherchée n'existe pas.</span>
      <span>Mais vous pouvez :</span>
      <ButtonBack to="/"><span>Revenir à l'accueil</span></ButtonBack>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: calc(100vh - 7rem);

  h1 {
      margin: 0 auto;
  }

  span {
    font-size: 2rem;
  }

  img {
    width: min(90%, 30rem);
  }
`;

const ButtonBack = styled(Link)`
  font-size: 2rem;
  color: #ffffff;
  border: none;
  background: var(--main-pink);
  border-radius: 2rem;
  height: 4rem;
  width: min(90%, 50rem);
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media (max-width: 768px) {
    height: 3rem;
  }
`;

export default NotFound;
