import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  ButtonRed,
  FormContent,
  InputField,
  LabelField,
  Logo,
} from "../styles/input.styles";

const Connection = () => {
  const { setAuth, setUser } = useContext(AuthContext);
  const [login, setLogin] = useState({ identification: "", password: "" });
  const [fail, setFail] = useState(false);
  const navigate = useNavigate();

  const signIn = (
    login: { identification: string; password: string },
    setAuth: (e: any) => void,
    setUser: (e: any) => void,
    setFail: (e: any) => void
  ) => {
    axios
      .post("http://localhost:5000/api/auth/login", {
        login: login.identification,
        password: login.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("TOKEN", res.data.token);
        console.log("Logged successfully");
      })
      .then(() => localStorage.getItem("TOKEN"))
      .then((token) => {
        axios
          .get(`http://localhost:5000/api/users/?login=${login.identification}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((user) => {
            setAuth(true);
            setUser({
              id: user.data[0].id,
              login: user.data[0].login,
              email: user.data[0].email,
              profil_image: user.data[0].profil_image,
            });
          })
          .then(() => {
            navigate("/themes");
            setFail(false);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err.response.data.errorMessage);
        setFail(true);
      });
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [event.target.id]: event.target.value });
  };

  const loginUser = (event: any) => {
    signIn(login, setAuth, setUser, setFail);
    event.preventDefault();
  };

  return (
    <FormContent onSubmit={loginUser}>
      <Logo
        src="/src/assets/Logo_anachou_et_son_site_qui_mempeche_de_dormir.png"
        alt="Logo jeu what's the movie"
      />
      <LabelField>
        <span>Identifiant</span>
        <InputField
          type="text"
          id="identification"
          placeholder="Identifiant"
          value={login.identification}
          onChange={handleLogin}
        />
      </LabelField>
      <LabelField>
        <span>Mot de passe</span>
        <InputField
          type="password"
          id="password"
          placeholder="********"
          value={login.password}
          onChange={handleLogin}
        />
      </LabelField>
      {fail ? <WrongId>Mauvais identifiant ou mot de passe</WrongId> : null}
      <ButtonRed type="submit">Jouer</ButtonRed>
    </FormContent>
  );
};

const WrongId = styled.span`
  color: var(--main-pink);
  position: absolute;
  bottom: 9rem;
`;

export default Connection;