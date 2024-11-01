import { useState } from "react";
import { UniversitariosModal } from "../../components/UniversitariosModal";
import { PlatesModal } from "../../components/PlatesModal";
import { CardModal } from "../../components/CardModal";
import { HelpContainer, HelpContent } from "./styles";

interface HelpProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentQuestion: any;
  eliminateWrongOptions: (numOptions: number) => void;
  jumpQuestion: (buttonIndex: number) => void;
}

export function Help({
  currentQuestion,
  eliminateWrongOptions,
  jumpQuestion,
}: HelpProps) {
  const [showUniversitariosModal, setShowUniversitariosModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showPlacasModal, setShowPlacasModal] = useState(false);

  const [universitariosUsed, setUniversitariosUsed] = useState(false);
  const [cartasUsed, setCartasUsed] = useState(false);
  const [placasUsed, setPlacasUsed] = useState(false);

  const [jumpClicks, setJumpClicks] = useState(0);
  const [jumpButtonsDisabled, setJumpButtonsDisabled] = useState([
    false,
    false,
    false,
  ]);

  const openUniversitariosModal = () => {
    setShowUniversitariosModal(true);
    setUniversitariosUsed(true); 
  };

  const closeUniversitariosModal = () => {
    setShowUniversitariosModal(false);
  };

  const openCardModal = () => {
    setShowCardModal(true);
    setCartasUsed(true); 
  };

  const closeCardModal = () => {
    setShowCardModal(false);
  };

  const openPlacasModal = () => {
    setShowPlacasModal(true);
  };

  const closePlacasModal = () => {
    setShowPlacasModal(false);
  };

  const handlePlacasClick = () => {
    setPlacasUsed(true); 
    openPlacasModal();
  };

  const handleJumpQuestion = (buttonIndex: number) => {
    if (jumpClicks < 3) {
      jumpQuestion(buttonIndex); 
      setJumpClicks((prevClicks) => prevClicks + 1);

      setJumpButtonsDisabled((prev) => {
        const newDisabled = [...prev];
        newDisabled[buttonIndex] = true;
        return newDisabled;
      });
    }
  };

  return (
    <HelpContainer>
      <HelpContent>
        <button onClick={openUniversitariosModal} disabled={universitariosUsed}>
          <img src="src/assets/universitarios.png" alt="" />
          <p>universitários</p>
        </button>
        <button
          onClick={() => handleJumpQuestion(0)}
          disabled={jumpButtonsDisabled[0]}
        >
          <img src="src/assets/jump.png" alt="" />
          <p>pular</p>
        </button>
      </HelpContent>
      <HelpContent>
        <button onClick={handlePlacasClick} disabled={placasUsed}>
          <img src="src/assets/placas.png" alt="" />
          <p>placas</p>
        </button>
        <button
          onClick={() => handleJumpQuestion(1)}
          disabled={jumpButtonsDisabled[1]}
        >
          <img src="src/assets/jump.png" alt="" />
          <p>pular</p>
        </button>
      </HelpContent>
      <HelpContent>
        <button onClick={openCardModal} disabled={cartasUsed}>
          <img src="src/assets/cartas.png" alt="" />
          <p>cartas</p>
        </button>
        <button
          onClick={() => handleJumpQuestion(2)}
          disabled={jumpButtonsDisabled[2]}
        >
          <img src="src/assets/jump.png" alt="" />
          <p>pular</p>
        </button>
      </HelpContent>

      {/* Modais */}
      <UniversitariosModal
        isOpen={showUniversitariosModal}
        onClose={closeUniversitariosModal}
        answers={currentQuestion.answers}
        correctIndex={currentQuestion.correct}
      />
      <CardModal
        isOpen={showCardModal}
        onClose={closeCardModal}
        eliminateWrongOptions={eliminateWrongOptions}
      />
      <PlatesModal
        isOpen={showPlacasModal}
        onClose={closePlacasModal}
        correctIndex={currentQuestion.correct}
      />
    </HelpContainer>
  );
}
