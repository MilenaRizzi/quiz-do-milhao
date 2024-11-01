// GameOverScreen.tsx

import { GameOverContainer, Message, Restart } from "./styles";

export function GameOverScreen() {
  return (
    <GameOverContainer>
      <Message>Fim de Jogo!</Message>
      <Restart to={"/"}>Voltar ao Início</Restart>
    </GameOverContainer>
  );
}
