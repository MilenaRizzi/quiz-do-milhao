import { Link } from "react-router-dom";
import styled from "styled-components";

export const ScoringContainer = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  gap: 200px;
`;
export const ScoringContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-left: 12px;
  padding-top: 10px;
  color: white;

`;

export const ScoringCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fac350;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  text-align: center;
  min-width: 120px;

  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  background-size: 250% 200%;
  padding: 8px 20px;

  span {
    font-size: 12px;
    color: #966c4a;
  }

  p {
    margin: 0;
    color: #96824a;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
export const StopGame = styled(Link)`
  height: 30px;
  padding: 0 40px;
  background-color: #ce0000;
  border-radius: 10px;
  border: none;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
