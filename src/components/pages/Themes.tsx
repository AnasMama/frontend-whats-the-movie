import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RetourLink } from "../styles/input.styles";
import ThemeCard from "../ThemeCard";

const Themes: React.FC = () => {
  const [themeList, setThemeList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/themes")
      .then((res) => setThemeList(res.data));
  }, []);

  return (
    <ThemeContent>
      <h1>Choisissez un theme</h1>
      <ThemeListContent>
        {themeList.map((theme: { id: number; name: string }, index) => (
          <ThemeCard key={index} idTheme={theme.id} name={theme.name} />
        ))}
      </ThemeListContent>
      <RetourLink to={`/`} >Retour</RetourLink>
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

const ThemeListContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

export default Themes;
