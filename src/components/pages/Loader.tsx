import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 3000);
  }, []);
  useEffect(() => {
    if (loader) {
      navigate("/connexion");
    }
  }, [loader]);

  return (
    <LoaderContainer>
      <img
        src="/src/assets/Logo_anachou_et_son_site_qui_mempeche_de_dormir.png"
        alt="Check list logo"
      />
      <h1>
        DANS TON <br></br>CADDIE
      </h1>
    </LoaderContainer>
  );
};

const LoaderAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation-name: ${LoaderAnimation};
  animation-duration: 4s;
  img {
    width: 30%;
  }
`;

export default Loader;
