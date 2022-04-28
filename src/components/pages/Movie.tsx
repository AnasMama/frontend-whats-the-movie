import axios from "axios";
import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router";
import styled from "styled-components";
import {
  Arrow,
  ButtonRed,
  FormContent,
  InputField,
  LabelField,
  Logo,
  RetourLink,
} from "../styles/input.styles";

const Movie: React.FC = () => {
  const params: Readonly<Params<string>> = useParams();
  const { movie: idMovie, theme: idTheme } = params;
  const [movie, setMovie] = useState({ poster_path: "" });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=fb3bd5517db63a241a2ce4a3302e825d`
      )
      .then((res) => res.data)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // console.log(movie);

  return (
    <MovieContent>
      <MovieSelector>
        <Arrow src="/src/assets/arrow.png" alt="Fleche de navigation" />
        <GuessImg
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Film à deviner"
        />
        <Arrow
          src="/src/assets/arrow.png"
          alt="Fleche de navigation"
          role="true"
        />
      </MovieSelector>
      <AnswerContent>
        <Logo
          src="/src/assets/Logo_anachou_et_son_site_qui_mempeche_de_dormir.png"
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
        <RetourLink to={`/themes/${idTheme}/level/1`}>Retour</RetourLink>
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
  padding: 2rem 4rem;

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

const GuessImg = styled.img`
  display: block;
  width: 30rem;
  /* min-width: 500px; */
  filter: ${(imgToGuess: { blur?: string }) =>
    imgToGuess.blur ? imgToGuess.blur : "blur(0.8rem)"};
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export default Movie;
