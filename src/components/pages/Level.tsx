import axios from "axios";
import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router";
import styled from "styled-components";
import MovieCard from "../MovieCard";
import { Arrow, RetourLink } from "../styles/input.styles";

export interface MovieFind {
  id: number;
  mdb_identification: number;
  icon: string | null;
  french_name: string;
  level: number;
  theme_id: number;
}

const Level: React.FC = () => {
  const params: Readonly<Params<string>> = useParams();
  const idTheme: string | undefined = params.theme;
  const [listMovies, setListMovies] = useState([]);
  const [level, setLevel] = useState<number>(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/themes/${idTheme}/movies/?level=${level}`)
      .then((response) => setListMovies(response.data));
  }, [level]);

  return (
    <LevelContent>
      <h1>Niveau {level}</h1>
      <LevelChoosen>
        <Arrow
          src="/src/assets/arrow.png"
          alt="Fleche de navigation"
          onClick={() => setLevel(level > 1 ? level - 1 : 3)}
        />
        <MoviesContent>
          {listMovies.map((movie: MovieFind, index: number) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </MoviesContent>
        <Arrow
          src="/src/assets/arrow.png"
          alt="Fleche de navigation"
          role="true"
          onClick={() => setLevel(level < 3 ? level + 1 : 1)}
        />
      </LevelChoosen>
      <RetourLink to={`/themes`} >Retour</RetourLink>
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

const MoviesContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
`;

export default Level;
