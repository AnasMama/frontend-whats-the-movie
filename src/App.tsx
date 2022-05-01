import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Connection from "./components/pages/Connection";
import Level from "./components/pages/Level";
import Movie from "./components/pages/Movie";
import Profil from "./components/pages/Profil";
import Themes from "./components/pages/Themes";
import Inscription from "./components/pages/Inscription";
import GlobalStyle from "./components/styles/global.styles";
import NotFound from "./components/pages/NotFound";
import { useState } from "react";
import MovieContext, { initialMovie } from "./components/contexts/MovieContext";
import ListMovieContext from "./components/contexts/ListMoviesContext";
import AuthContext from "./components/contexts/AuthContext";

const App: React.FC = () => {
  const [movieToFind, setMovieToFind] = useState(initialMovie);
  const [listMovies, setListMovies] = useState([initialMovie]);
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState({
    id: null,
    login: null,
    email: null,
    profil_image: null,
  }); 

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser, auth, setAuth }}>
        <MovieContext.Provider value={{ movieToFind, setMovieToFind }}>
          <ListMovieContext.Provider value={{ listMovies, setListMovies }}>
            <GlobalStyle />
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Connection />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/profil" element={auth ? <Profil /> : <Navigate to="/" state={{ from: location }} replace />} />
                <Route
                  path="/themes"
                  element={auth ? <Themes /> : <Navigate to="/" />}
                />
                <Route
                  path="/themes/:theme/levels"
                  element={
                    auth ? <Level /> : <Navigate to="/" state={{ from: location }} replace />
                  }
                />
                <Route
                  path="/themes/:theme/levels/:level/movies/:movie"
                  element={
                    auth ? (
                      <Movie />
                    ) : (
                      <Navigate to="/" state={{ from: location }} replace />
                    )
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ListMovieContext.Provider>
        </MovieContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
