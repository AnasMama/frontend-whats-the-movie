import React from "react";
import styled from "styled-components";

const Themes: React.FC = () => {
  return (
    <ThemeContent>
      <h1>Choisissez un theme</h1>
      <RetourLink>Retour</RetourLink>
    </ThemeContent>
  );
};

const ThemeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 12rem);
  width: 90%;
  margin: auto;
`;

const RetourLink = styled.span`
    font-size: 2rem;
`

export default Themes;
