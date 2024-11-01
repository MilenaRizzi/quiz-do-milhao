import {ScoringCard, ScoringContainer, ScoringContent, StopGame } from "./styles";

// Score.tsx
interface ScoreProps {
  score: number[];
  indice: number;
}

export function Score({ score, indice }: ScoreProps) {
  return (
    <ScoringContainer>
      {indice === 0 ? (
        <ScoringContent>
          <ScoringCard>
            <span>errar</span>
            <p>PERDE TUDO</p>
          </ScoringCard>
          <ScoringCard>
            <span>parar</span>
            <p>PERDE TUDO</p>
          </ScoringCard>
          <ScoringCard>
            <span>acertar</span>
            <p>R$1000</p>
          </ScoringCard>
        </ScoringContent>
      ) : (
        <ScoringContent>
          <ScoringCard>
            <span>errar</span>
            <p>R${score[indice - 1] / 4}</p>
          </ScoringCard>
          <ScoringCard>
            <span>parar</span>
            <p>R${score[indice - 1]  / 2}</p>
          </ScoringCard>
          <ScoringCard>
            <span>acertar</span>
            <p>R${score[indice - 1]}</p>
          </ScoringCard>
        </ScoringContent>
      )}
      <StopGame to={"/"}>parar</StopGame>
    </ScoringContainer>
  );
}
