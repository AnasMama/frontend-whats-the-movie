import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Params, useParams } from "react-router";
import styled from "styled-components";
import MovieContext, { initialMovie } from "../contexts/MovieContext";
import {
  Arrow,
  ButtonRed,
  FormContent,
  InputField,
  LabelField,
  Logo,
  RetourLink,
} from "../styles/input.styles";
import noAccent from "../noAccent";
import ListMoviesContext from "../contexts/ListMoviesContext";

const Movie: React.FC = () => {
  const params = useParams<string>();
  const { theme: idTheme } = params;
  const [movie, setMovie] = useState({ id: 0, poster_path: "" });
  const { movieToFind, setMovieToFind } = useContext(MovieContext);
  const [answer, setAnswer] = useState("");
  const [trueMovie, setTrueMovie] = useState(false);
  const [isBlur, setIsBlur] = useState(true);

  const { listMovies } = useContext(ListMoviesContext);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieToFind.mdb_identification}?api_key=fb3bd5517db63a241a2ce4a3302e825d`
      )
      .then((res) => res.data)
      .then((data) => {
        setMovie(data);
        setTrueMovie(true);
        setIsBlur(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [movieToFind]);

  const findIndexOfMovie = listMovies.findIndex(
    (actualMovie) =>
      actualMovie.mdb_identification === movieToFind.mdb_identification
  );

  const handleAnswer = (event: any) => {
    console.log(movieToFind.french_name);
    console.log(answer);
    if (noAccent(movieToFind.french_name) === noAccent(answer)) {
      setAnswer("");
      console.log("Good !");
    }
    setIsBlur(false);
    event.preventDefault();
  };

  return (
    <MovieContent>
      <MovieSelector>
        <Arrow
          src="/src/assets/arrow.png"
          alt="Fleche de navigation"
          onClick={() =>
            setMovieToFind(
              findIndexOfMovie > 0
                ? listMovies[findIndexOfMovie - 1]
                : listMovies[listMovies.length - 1]
            )
          }
        />
        {trueMovie && (
          <GuessImg
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Film à deviner"
            blur={isBlur}
          />
        )}
        <Arrow
          src="/src/assets/arrow.png"
          alt="Fleche de navigation"
          role="true"
          onClick={() =>
            setMovieToFind(
              findIndexOfMovie < listMovies.length - 2
                ? listMovies[findIndexOfMovie + 1]
                : listMovies[0]
            )
          }
        />
      </MovieSelector>
      <AnswerContent>
        <Logo
          src="/src/assets/Logo_anachou_et_son_site_qui_mempeche_de_dormir.png"
          alt="Logo jeu what's the movie"
          hide
        />
        <FormAnswer onSubmit={handleAnswer}>
          <LabelField>
            <span>Quel est ce film ?</span>
            <InputField
              type="text"
              placeholder="Votre réponse"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </LabelField>
          <ButtonRed type="submit">Valider</ButtonRed>
        </FormAnswer>
        <RetourLink to={`/themes/${idTheme}/levels`}>Retour</RetourLink>
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
  transition: ${(imgToGuess: { blur?: boolean }) =>
    !imgToGuess.blur ? "filter 0.8s" : "none"};
  filter: ${(imgToGuess: { blur?: boolean }) =>
    !imgToGuess.blur ? "none" : "blur(0.8rem)"};
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export default Movie;
