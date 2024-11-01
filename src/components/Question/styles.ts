import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1000px;
`;

export const QuestionContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Alternatives = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#4caf50" : "#ce0000")};
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 50px;
  margin: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  position: relative;
  border: none;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#45a049" : "#00CF3A")};
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: -30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  border: 2px solid #223327; /* Borda preta para o contorno do círculo */
  position: relative;
  z-index: 1;

  p {
    margin: 0;
    color: #223327;
  }
`;

export const QuestionText = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98%;
  margin: auto;
  height: 80px;
  background-color: #ce0000; /* Fundo vermelho */
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.5);

  color: white;
  border-radius: 12px;
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
`;
