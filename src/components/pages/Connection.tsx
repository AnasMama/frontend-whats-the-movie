import React from 'react'
import { ButtonRed, FormContent, InputField, LabelField, Logo } from '../styles/input.styles'

const Connection = () => {
  return (
    <FormContent>
        <Logo src="src/assets/Logo_anachou_et_son_site_qui_mempeche_de_dormir.png" alt="Logo jeu what's the movie" />
      <LabelField>
        <span>Identifiant</span>
        <InputField type="text" placeholder="Identifiant" />
      </LabelField>
      <LabelField>
        <span>Mot de passe</span>
        <InputField type="text" placeholder="********" />
      </LabelField>
      <ButtonRed type="submit">Jouer</ButtonRed>
    </FormContent>
  )
}

export default Connection