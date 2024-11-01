// styles.ts
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  font-family: "Jersey 10", sans-serif;
`;

export const Message = styled.p`
  margin: 20px;
  font-size: 70px;
  background: linear-gradient(
    to right,
    #e4d089,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #b38728
  );
  background-size: 250% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Restart = styled(Link)`
  text-decoration: none;
  color: aliceblue;
  padding: 8px;
  background-color: rebeccapurple;
  border-radius: 4px;
  font-size: 24px;

  background-color: #45a049;

  &:hover {
    background-color: #45b249;
  }
`;