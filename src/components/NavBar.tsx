import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "./contexts/AuthContext";

const NavBar: React.FC = () => {
  const { user, setUser, auth, setAuth } = useContext(AuthContext);

  const signout = () => {
    localStorage.removeItem("TOKEN");
    setAuth(false);
    setUser({
      id: null,
      login: null,
      email: null,
      profil_image: null,
    });
  };

  return (
    <NavBarContent>
      <Round>
        <img src="/src/assets/interrogation.png" alt="Point d'interrogation" />
      </Round>
      {auth ? (
        <UserConnection>
          <Link to="/profil">
            <LoginLi>{user.login}</LoginLi>
          </Link>
          <Link to="/">
            <LoginLi onClick={signout} color="true">
              Déconnexion
            </LoginLi>
          </Link>
        </UserConnection>
      ) : (
        <UserConnection>
          <Link to="/inscription">
            <LoginLi>Inscription</LoginLi>
          </Link>
          <Link to="/">
            <LoginLi color="true">Connexion</LoginLi>
          </Link>
        </UserConnection>
      )}
    </NavBarContent>
  );
};

const Round = styled.div`
  border-radius: 50%;
  background-color: var(--main-pink);
  width: 5rem;
  height: 5rem;
  margin: 1rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const UserConnection = styled.ul`
  display: flex;
  justify-content: row;
  gap: 2rem;
  font-size: 2rem;
  list-style: none;
  margin: 0 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 1rem;
  }
`;

const LoginLi = styled.li`
  background-color: ${(li: any) => (li.color ? "var(--main-pink)" : "none")};
  border-radius: 2rem;
  padding: 0.5rem 3rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default NavBar;