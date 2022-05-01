import { createContext } from "react";
import { MovieFind } from "../pages/Level";

export const initialMovie: MovieFind = {
  id: 1,
  mdb_identification: 1,
  icon: null,
  french_name: "",
  level: 1,
  theme_id: 1,
};

const MovieContext: React.Context<{
    movieToFind: MovieFind;
    setMovieToFind: (e: any) => void;
}> = createContext({ movieToFind: initialMovie, setMovieToFind: (e: any) => {e} });

export default MovieContext;
