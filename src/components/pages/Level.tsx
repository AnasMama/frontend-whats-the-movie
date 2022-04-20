import React from "react";
import styled from "styled-components";
import { Arrow, RetourLink } from "../styles/input.styles";

const Level: React.FC = () => {
  return (
    <LevelContent>
      <h1>Niveau 1</h1>
      <LevelChoosen>
          <Arrow src='src/assets/arrow.png' alt='Fleche de navigation' />
          <Arrow src='src/assets/arrow.png' alt='Fleche de navigation' role="true"/>
      </LevelChoosen>
      <RetourLink>Retour</RetourLink>
    </LevelContent>
  );
};

const LevelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 12rem);
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LevelChoosen = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default Level;
