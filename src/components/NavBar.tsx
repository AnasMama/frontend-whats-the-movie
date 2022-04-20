import React from "react";
import styled from "styled-components";

const NavBar: React.FC = () => {
  return (
    <NavBarContent>
      <Round>
        <img src="src/assets/interrogation.png" alt="Point d'interrogation" />
      </Round>
      <UserConnection>
        <LoginLi>Inscription</LoginLi>
        <LoginLi color="true">Connexion</LoginLi>
      </UserConnection>
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
  background-color: ${(li) => (li.color ? "var(--main-pink)" : "none")};
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
