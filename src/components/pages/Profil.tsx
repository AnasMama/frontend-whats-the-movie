import React from "react";
import styled from "styled-components";
import {
  ButtonRed,
  FormContent,
  InputField,
  LabelField,
} from "../styles/input.styles";

const Profil = () => {
  return (
    <ProfilContent>
      <h1>Profil</h1>
      <ProfilInfos>
        <ProfilLeft>
          <img src="src/assets/Unknown.png" alt="Photo de profil" />
          <h1>Mes trophés</h1>
          <TrophyList></TrophyList>
        </ProfilLeft>
        <FormContent>
          <LabelField>
            <span>Identifiant</span>
            <InputField type="text" placeholder="Identifiant" />
          </LabelField>
          <LabelField>
            <span>Mot de passe</span>
            <InputField type="text" placeholder="********" />
          </LabelField>
          <LabelField>
            <span>Email</span>
            <InputField type="text" placeholder="Email" />
          </LabelField>
          <ButtonRed type="submit">Supprimer</ButtonRed>
        </FormContent>
      </ProfilInfos>
    </ProfilContent>
  );
};

const ProfilContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilInfos = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    width: min(90%, 20rem);
    /* border-radius: 3rem; */
    margin: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TrophyList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ProfilLeft = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Profil;
