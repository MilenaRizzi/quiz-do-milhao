import styled from "styled-components";
interface CardProps {
  flipped: boolean;
  image: string;
  onClick: () => void;
  disabled: boolean;
}

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 700px;
  height: 320px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #e3cf87;
  }
`; 

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

export const Card = styled.div<CardProps>`
  width: 120px;
  height: 160px;
  margin: 0 10px;
  background-color: ${(props) => (props.flipped ? "#fff" : "#00f")};
  background-image: ${(props) =>
    props.flipped && props.image ? `url(${props.image})` : "none"};
  background-size: cover;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;