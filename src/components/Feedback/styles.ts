import { Link } from "react-router-dom";
import styled from "styled-components";

export const FeedBackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ocupa a altura total da viewport */
  text-align: center;

`;


export const FeedbackMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #966c4a;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  background-size: 250% 200%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
  width: 400px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const RestartGame = styled(Link)`
  background-color: #d4d4d4;
  color: #966c4a;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;
