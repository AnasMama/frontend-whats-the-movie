import React from "react";
import {
  ButtonRed,
  FormContent,
  InputField,
  LabelField,
} from "../styles/input.styles";

const Inscription: React.FC = () => {
  return (
    <FormContent>
      <h1>Bienvenue !</h1>
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
      <ButtonRed type="submit">Créer un compte</ButtonRed>
    </FormContent>
  );
};

export default Inscription;
