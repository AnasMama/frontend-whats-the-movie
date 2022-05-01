import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  idTheme: number;
  name: string;
  icon?: string;
};

const ThemeCard = ({ idTheme, name, icon }: Props) => {
  return (
    <ThemeCardContent to={`/themes/${idTheme}/levels`}>
      <ThemeImg
        src={icon ? icon : "src/assets/cinema.png"}
        alt="icon du thème"
      />
      <h1>{name}</h1>
    </ThemeCardContent>
  );
};

const ThemeImg = styled.img`
  width: 15rem;
`;

const ThemeCardContent = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export default ThemeCard;
