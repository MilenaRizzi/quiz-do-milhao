import { useEffect, useState } from "react";
import {
  ButtonContainer,
  HomeContainer,
  // Icon,
  // Icons,
  InstructionButton,
  PlayButton,
  Title,
} from "./styles";
import { InstructionsModal } from "../../components/IntructionsModal";
import { FaDollarSign } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background-color: #0f172a;
`;

const fall = keyframes`
  to {
    transform: translateY(110vh);
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(359deg);
  }
`;

const DollarContainer = styled.span<{ size: number; left: number }>`
  position: absolute;
  top: -100px;
  color: #85bb65;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  animation: ${fall} 2s linear;
  font-size: ${({ size }) => size}px;
  left: ${({ left }) => left}px;

  .fa-dollar-sign {
    animation: ${rotate} 2s linear infinite;
  }
`;

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [dollars, setDollars] = useState<JSX.Element[]>([]);

  const addDollar = () => {
    const dollarSize = 20 + Math.random() * 40;
    const dollarLeft = Math.random() * window.innerWidth;
    const animationDuration = 1 + Math.random() * 3;

    const dollarElement = (
      <DollarContainer
        key={Date.now() + Math.random()}
        size={dollarSize}
        left={dollarLeft}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        <FaDollarSign />
      </DollarContainer>
    );

    setDollars((prevDollars) => [...prevDollars, dollarElement]);

    setTimeout(() => {
      setDollars((prevDollars) => prevDollars.slice(1));
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(addDollar, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppContainer>
      <div>{dollars}</div>

      <HomeContainer>
        {/* <Icons>
          <Icon>1</Icon>
          <Icon>0</Icon>
          <Icon>0</Icon>
          <Icon>0</Icon>
          <Icon>0</Icon>
          <Icon>0</Icon>
          <Icon>0</Icon>
        </Icons> */}
        <Title>QUIZ DO MILHÃO</Title>
        <ButtonContainer>
          <InstructionButton onClick={openModal}>Como Jogar</InstructionButton>
          <PlayButton to={"/game"}>Jogar</PlayButton>
        </ButtonContainer>
        {isModalOpen && <InstructionsModal onClose={closeModal} />}
      </HomeContainer>
    </AppContainer>
  );
}
