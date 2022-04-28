import { Link } from "react-router-dom";
import styled from "styled-components";
import { MovieFind } from "./pages/Level";

interface MovieChoosen {
  movie: MovieFind;
}

const MovieCard: React.FC<MovieChoosen> = ({ movie }) => {
  const { mdb_identification: idMovie, icon, level, theme_id: idTheme } = movie;

  return (
    <MovieCardContent
      to={`/themes/${idTheme}/levels/${level}/movies/${idMovie}`}
    >
      <MovieImg
        src={icon ? icon : "/src/assets/ticket.png"}
        alt="icon du film"
      />
    </MovieCardContent>
  );
};

const MovieImg = styled.img`
  width: 12rem;
`;

const MovieCardContent = styled(Link)`
  width: 25% !important;
`;

export default MovieCard;
