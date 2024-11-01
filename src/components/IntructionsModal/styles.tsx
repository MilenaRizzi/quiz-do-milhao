import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: -70px;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: 15% auto;
  padding: 20px 30px;
  border: 1px solid #888;
  max-width: 550px;
  border-radius: 10px;
  text-align: justify;
  line-height: 20px;
  color: black;

  span {
    font-weight: bold;
  }

  h2 {
    color: #1a9db5;
  }

  h3 {
    color: #ce0000;
  }
`;

export const CloseModal = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
