import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  ButtonRed,
  FormContent,
  InputField,
  LabelField,
} from "../styles/input.styles";

const Inscription: React.FC = () => {
  const { setAuth, setUser } = useContext(AuthContext);
  const [fail, setFail] = useState(false);
  const [newUser, setNewUser] = useState({
    login: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const login = { identification: newUser.login, password: newUser.password };

  const handleNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
  };

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
          .get(
            `http://localhost:5000/api/users/?login=${login.identification}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
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

  const register = (event: any) => {
    axios
      .post(`http://localhost:5000/api/users/`, {
        login: newUser.login,
        password: newUser.password,
        email: newUser.email,
      })
      .then((result) => console.log(result.data))
      .then(() => signIn(login, setAuth, setUser, setFail))
      .catch((err) => console.error(err));
    event.preventDefault();
  };

  return (
    <FormContent onSubmit={register}>
      <h1>Bienvenue !</h1>
      <LabelField>
        <span>Identifiant</span>
        <InputField
          id="login"
          type="text"
          placeholder="Identifiant"
          value={newUser.login}
          onChange={handleNewUser}
        />
      </LabelField>
      <LabelField>
        <span>Mot de passe</span>
        <InputField
          id="password"
          type="text"
          placeholder="********"
          value={newUser.password}
          onChange={handleNewUser}
        />
      </LabelField>
      <LabelField>
        <span>Email</span>
        <InputField
          id="email"
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={handleNewUser}
        />
      </LabelField>
      <ButtonRed type="submit">Créer un compte</ButtonRed>
    </FormContent>
  );
};

export default Inscription;
