import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffc300;
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 250px;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid #45a049;
  position: relative;
  font-family: "Jersey 10", sans-serif;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 10px;
    border: 2px solid #45a049;
  }
`;

export const Title = styled.div`
  font-size: 6vw;
  font-weight: bold;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 5px;
  /* color: #f70909; */
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
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  font-family: "Jersey 10", sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;


`;

export const PlayButton = styled(Link)`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #ce0000;
  transition: background-color 0.3s;
  text-decoration: none;
  transition: background-color 0.3s;
  animation: pulse 1.5s infinite;
  &:hover {
    background-color: #e30000;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const InstructionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #45a049;

  &:hover {
    background-color: #45b249;
  }
`;
