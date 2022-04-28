import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Connection from "./components/pages/Connection";
import Level from "./components/pages/Level";
import Movie from "./components/pages/Movie";
import Profil from "./components/pages/Profil";
import Themes from "./components/pages/Themes";
import Inscription from "./components/pages/Inscription";
import GlobalStyle from "./components/styles/global.styles";
import NotFound from "./components/pages/NotFound";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/themes/:theme/levels" element={<Level />} />
          <Route
            path="/themes/:theme/levels/:level/movies/:movie"
            element={<Movie />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
