import { useState, useEffect } from "react";
import { Modal, CardContainer, Card, Button, ModalContent } from "./styles";
import { questions } from "../../data/questions";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  eliminateWrongOptions: (numOptions: number) => void; // Função que recebe um número e retorna void
}

export function CardModal({ isOpen, onClose, eliminateWrongOptions }: CardModalProps) {
  const [cards, setCards] = useState([
    { id: 1, image: "src/assets/card-a.jpg", flipped: false },
    { id: 2, image: "src/assets/card-2.jpg", flipped: false },
    { id: 3, image: "src/assets/card-3.jpg", flipped: false },
    { id: 4, image: "src/assets/card-king.png", flipped: false },
  ]);

  console.log(questions);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const shuffleCards = (cardsArray: typeof cards) => {
    return [...cardsArray].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (isOpen) {
      setCards(
        shuffleCards(cards.map((card) => ({ ...card, flipped: false })))
      );
      setIsCardFlipped(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleCardClick = (id: number) => {
    if (!isCardFlipped) {
      let optionsToEliminate = 0;
      switch (id) {
        case 1: // Carta A: Eliminar 1 alternativa
          optionsToEliminate = 1;
          break;
        case 2: // 2 de Paus: Eliminar 2 alternativas
          optionsToEliminate = 2;
          break;
        case 3: // 3 de Paus: Eliminar 3 alternativas
          optionsToEliminate = 3;
          break;
        case 4: // Rei (K): Não eliminar nada
          optionsToEliminate = 0;
          break;
      }

      if (optionsToEliminate > 0) {
        eliminateWrongOptions(optionsToEliminate); // Chama a função de eliminação
      }

      setCards(
        cards.map((card) =>
          card.id === id ? { ...card, flipped: true } : card
        )
      );
      setIsCardFlipped(true);
    }
  };


  if (!isOpen) return null;

  return (
    <Modal>
      <ModalContent>
        <h1>CARTAS</h1>
        <CardContainer>
          {cards.map((card) => (
            <Card
              key={card.id}
              flipped={card.flipped}
              image={card.image}
              disabled={isCardFlipped}
              onClick={() => handleCardClick(card.id)} // trata o clique
            />
          ))}
        </CardContainer>
        <Button onClick={onClose}>OK</Button>
      </ModalContent>
    </Modal>
  );
}
