import { Link } from "react-router-dom";
import styled from "styled-components";

/* styles.js */
export const VictoryScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  color: white;
  font-family: "Jersey 10", sans-serif;
`;

export const Message = styled.p`
  margin: 0px;
  font-size: 60px;
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
  z-index: 2;
`;

export const Restart = styled(Link)`
  text-decoration: none;
  color: aliceblue;
  padding: 8px;
  background-color: rebeccapurple;
  border-radius: 4px;
  font-size: 24px;
  margin-top: 40px;
  background-color: #45a049;
  z-index: 2;

  &:hover {
    background-color: #45b249;
  }
`;

export const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
