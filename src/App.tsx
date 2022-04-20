import NavBar from "./components/NavBar";
import Connection from "./components/pages/Connection";
import Level from "./components/pages/Level";
import Movie from "./components/pages/Movie";
import Profil from "./components/pages/Profil";
import Themes from "./components/pages/Themes";
// import Inscription from "./components/pages/Inscription";
import GlobalStyle from "./components/styles/global.styles";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <GlobalStyle />
      {/* <Inscription /> */}
      {/* <Connection /> */}
      {/* <Themes /> */}
      {/* <Profil /> */}
      <Movie />
      {/* <Level /> */}
    </div>
  )
}

export default App
