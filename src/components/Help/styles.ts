import styled from "styled-components";

export const HelpContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.5);

  width: 450px;
  border-radius: 12px;
  color: white;
  height: 275px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-top: 8px;
    font-size: 1rem;
  }
`;

export const HelpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    color: white;
    padding-top: 8px;
    transition: background-color 0.3s;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }

    img {
      width: 48px;
    }
  }

  /* Estilização dos botões "pular" */
  button:disabled {
    cursor: not-allowed; /* Indica que o botão está desativado */
    opacity: 0.4; /* Opacidade para indicar desativação */
  }
`;
