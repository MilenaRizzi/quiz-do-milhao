import { Message, Restart, VictoryScreenContainer } from "./styles";
import Fireworks from "./fireworks"; // importe o componente de fogos de artifício

export function VictoryScreen() {
  return (
    <VictoryScreenContainer>
      <Fireworks />
      <Message>Parabéns!</Message>
      <Message>Você venceu o jogo e ganhou 1.000.000!</Message>
      <Restart to={"/"}>Voltar ao Início</Restart>
    </VictoryScreenContainer>
  );
}
