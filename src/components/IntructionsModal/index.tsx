import { CloseModal, ModalContainer, ModalContent } from "./styles";

interface InstructionsModalProps {
  onClose: () => void;
}

export function InstructionsModal({ onClose }: InstructionsModalProps) {
  return (
    <ModalContainer>
      <ModalContent>
        <CloseModal onClick={onClose}>&times;</CloseModal>
        <h2>Como Jogar</h2>
        <p>
          Você está pronto para testar seus conhecimentos e conquistar a maior
          pontuação já alcançada?
          <span> {" "}
            Este é o seu desafio: responder a uma série de perguntas, acumulando
            pontos a cada acerto.
          </span>
        </p>
        <p>
          <span>
            A meta? Chegar ao topo com a incrível pontuação de 1 milhão de
            pontos!
          </span>
          Cada resposta correta te aproxima do grande prêmio, mas cuidado: um
          erro pode custar caro.
        </p>
        <p>
          Será que você consegue vencer o jogo e provar que é um verdadeiro
          mestre dos conhecimentos? Aceite o desafio e mostre do que é capaz!
        </p>
        <h3>Vamos lá, rumo ao milhão!</h3>
      </ModalContent>
    </ModalContainer>
  );
}
