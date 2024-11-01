import {
  ModalOverlay,
  ModalContent,
  Title,
  CirclesContainer,
  Circle,
  OkButton,
} from "./styles";

interface PlacasModalProps {
  isOpen: boolean;
  onClose: () => void;
  correctIndex: number;
}

export function PlatesModal({
  isOpen,
  onClose,
  correctIndex,
}: PlacasModalProps) {
  if (!isOpen) return null;
  function sortearNumero() {
    return Math.floor(Math.random() * 4) + 1;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>PLACAS</Title>
        <CirclesContainer>
          <Circle>{correctIndex}</Circle>
          <Circle>{correctIndex}</Circle>
          <Circle>{sortearNumero()}</Circle>
          <Circle>{correctIndex}</Circle>
        </CirclesContainer>
        <OkButton onClick={onClose}>OK</OkButton>
      </ModalContent>
    </ModalOverlay>
  );
}
