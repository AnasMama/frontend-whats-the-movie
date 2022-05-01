import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";
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

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [event.target.id]: event.target.value });
  };

  const signin = (event: any) => {
    Promise.all([
      axios.post("http://localhost:5000/api/auth/login", {
        login: login.identification,
        password: login.password,
      }),
      axios.get(
        `http://localhost:5000/api/users/?login=${login.identification}`
      ),
    ])
      .then((result) => {
        setAuth(true);
        setUser({
          id: result[1].data[0].id,
          login: result[1].data[0].login,
          email: result[1].data[0].email,
          profil_image: result[1].data[0].profil_image,
        });
      })
      .then(() => {
        navigate("/themes");
      })
      .catch((err) => {
        console.error(err);
        setFail(true);
      });
    event.preventDefault();
  };

  return (
    <FormContent onSubmit={signin}>
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
