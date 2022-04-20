import React from "react";
import styled from "styled-components";
import { Arrow, ButtonRed, FormContent, InputField, LabelField, Logo, RetourLink } from "../styles/input.styles";

const Movie: React.FC = () => {
  return (
    <MovieContent>
      <MovieSelector>
        <Arrow src="src/assets/arrow.png" alt="Fleche de navigation" />
        <Arrow
          src="src/assets/arrow.png"
          alt="Fleche de navigation"
          role="true"
        />
      </MovieSelector>
      <AnswerContent>
        <Logo
          src="src/assets/Logo_anachou_et_son_site_qui_mempeche_de_dormir.png"
          alt="Logo jeu what's the movie"
          hide
        />
        <FormAnswer>
          <LabelField>
            <span>Quel est ce film ?</span>
            <InputField type="text" placeholder="Votre réponse" />
          </LabelField>
          <ButtonRed type="submit">Valider</ButtonRed>
        </FormAnswer>
        <RetourLink>Retour</RetourLink>
      </AnswerContent>
    </MovieContent>
  );
};

const FormAnswer = styled(FormContent)`
    @media (max-width: 768px) {
        gap: 1rem;
  }
`;

const MovieContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  min-height: calc(100vh - 7rem);
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: calc(100vh - 5rem);
    padding: 2rem 1rem;
  }
`;

const MovieSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;

const AnswerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Movie;
