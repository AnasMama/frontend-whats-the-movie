import styled from "styled-components";

const FormContent = styled.form`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  margin: auto;
  gap: 3rem;
  
  
  @media (max-width: 768px) {
    width: 100%;
  }
  `;

const LabelField = styled.label`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  gap: 2rem;
  `;

const InputField = styled.input`
  font-size: 2rem;
  border: none;
  background: #ffffff;
  border-radius: 2rem;
  height: 4rem;
  width: min(90%, 36rem);

  @media (max-width: 768px) {
    height: 3rem;
  }
`;

const ButtonRed = styled.button`
  font-size: 2rem;
  color: #ffffff;
  border: none;
  background: var(--main-pink);
  border-radius: 2rem;
  height: 4rem;
  width: min(90%, 36rem);
  margin: 1rem;

  @media (max-width: 768px) {
    height: 3rem;
  }
`;

const Logo = styled.img`
  width: min(90%, 30rem);
  margin: -3rem;
  @media (max-width: 768px) {
    margin: 0rem;
    display: ${(props: {hide?: boolean}) => props.hide ? "none" : "flex"};
  }


`;

const Arrow = styled.img`
    width: 4rem;
    transform: ${(arrowNav) => (arrowNav.role ? "rotate(180deg)" : "none")};
    max-height: 4rem;

    @media (max-width: 768px) {
    width: 3rem;
  }
`;

const RetourLink = styled.span`
    font-size: 2rem;
    font-weight: 800;
`;

export { InputField, ButtonRed, FormContent, LabelField, Logo, Arrow, RetourLink };
