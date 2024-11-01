// src/components/UniversitariosModal.tsx
import {
  ModalContainer,
  ModalContent,
  OptionIcon,
  CloseButton,
} from "./styles";
// Você pode ajustar o estilo conforme o que já está usando

interface UniversitariosModalProps {
  isOpen: boolean;
  onClose: () => void;
  answers: string[];
  correctIndex: number;
}

export function UniversitariosModal({
  isOpen,
  onClose,
  correctIndex,
}: UniversitariosModalProps) {
  if (!isOpen) return null;

  function sortearNumero() {
    return Math.floor(Math.random() * 4) + 1;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <h2>UNIVERSITÁRIOS</h2>
        <div className="options">
          <OptionIcon>
            <img src="src/assets/universitarios.png" alt="Cap" />
            {/* <span>{index === correctIndex ? "Correto" : "3"}</span> */}
            <span>{correctIndex + 1}</span>
          </OptionIcon>
          <OptionIcon>
            <img src="src/assets/universitarios.png" alt="Cap" />
            {/* <span>{index === correctIndex ? "Correto" : "3"}</span> */}
            <span>{sortearNumero()}</span>
          </OptionIcon>
          <OptionIcon>
            <img src="src/assets/universitarios.png" alt="Cap" />
            {/* <span>{index === correctIndex ? "Correto" : "3"}</span> */}
            <span>{correctIndex + 1}</span>
          </OptionIcon>
          <OptionIcon>
            <img src="src/assets/universitarios.png" alt="Cap" />
            {/* <span>{index === correctIndex ? "Correto" : "3"}</span> */}
            <span>{correctIndex + 1}</span>
          </OptionIcon>
        </div>
        <CloseButton onClick={onClose}>OK</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
}
