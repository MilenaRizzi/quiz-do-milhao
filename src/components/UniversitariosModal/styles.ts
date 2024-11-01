// src/components/styles.tsx
import styled from "styled-components";

export const ModalContainer = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
   */
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
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 400px;
  height: 270px;
  border-radius: 10px;

  h2 {
    margin-top: 30px;
    color: #e3cf87;
  }

  .options {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }

  .option {
    text-align: center;
  }
`;

export const OptionIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
