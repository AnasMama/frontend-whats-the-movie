import { createContext } from "react";
import { MovieFind } from "../pages/Level";
import { initialMovie } from "./MovieContext";

const ListMoviesContext: React.Context<{
    listMovies: MovieFind[];
    setListMovies: (e: any) => void;
}>= createContext({ listMovies:[initialMovie], setListMovies: (e) => {}});

export default ListMoviesContext;

 