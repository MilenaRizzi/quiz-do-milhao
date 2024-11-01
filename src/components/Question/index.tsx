import { useEffect, useState } from "react";
import {
  Alternatives,
  Circle,
  QuestionContainer,
  QuestionContent,
  QuestionText,
} from "./styles";
import { Help } from "../Help";

interface QuestionData {
  question: string;
  answers: string[];
  correct: number;
}

interface QuestionProps {
  onFeedback: (message: string, increaseScore: boolean) => void;
  arrayScore: number[];
  currentQuestionIndex: number;
  onJump: () => void;
  question: QuestionData; // Pergunta específica passada do componente Game
}

// Função de embaralhamento tipada
function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export function Question({
  onFeedback,
  arrayScore,
  currentQuestionIndex,
  onJump,
  question,
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);

  const handleOptionClick = (optionText: string, isCorrect: boolean) => {
    setSelectedOption(optionText);
    if (isCorrect) {
      onFeedback(`Valendo R$${arrayScore[currentQuestionIndex]}`, true);
    } else {
      onFeedback("Resposta errada! O jogo acabou.", false);
    }
  };

  // Resetar estado ao carregar nova pergunta
  useEffect(() => {
    setSelectedOption(null);
    setEliminatedOptions([]);
  }, [question]);

  const eliminateWrongOptions = (numOptions: number) => {
    const correctIndex = question.correct;
    let wrongOptions = question.answers
      .map((_, index) => index)
      .filter((index) => index !== correctIndex);

    wrongOptions = shuffleArray(wrongOptions).slice(0, numOptions);
    setEliminatedOptions((prev) => [...prev, ...wrongOptions]);
  };

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <QuestionContent>
        <div>
          {question.answers.map((answer, index) => (
            <div
              key={index}
              style={{
                display: eliminatedOptions.includes(index) ? "none" : "flex",
                alignItems: "center",
              }}
            >
              <Circle>
                <p>{index + 1}</p>
              </Circle>
              <Alternatives
                selected={selectedOption === answer}
                onClick={() =>
                  handleOptionClick(answer, index === question.correct)
                }
                disabled={eliminatedOptions.includes(index)}
              >
                {answer}
              </Alternatives>
            </div>
          ))}
        </div>
        <div>
          <Help
            currentQuestion={question}
            eliminateWrongOptions={eliminateWrongOptions}
            jumpQuestion={onJump}
          />
        </div>
      </QuestionContent>
    </QuestionContainer>
  );
}
