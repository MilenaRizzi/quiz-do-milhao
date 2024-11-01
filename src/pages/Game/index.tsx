import { GameContainer, GameContent } from "./styles";
import { Question } from "../../components/Question";
import { Score } from "../../components/Score";
import { Feedback } from "../../components/Feedback";
import { VictoryScreen } from "../VictoryScreen";
import { useEffect, useState } from "react";
import { GameOverScreen } from "../GameOverScreen";
import { questions } from "../../data/questions";

interface QuestionData {
  question: string;
  answers: string[];
  correct: number;
}

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

// Função para obter as perguntas sem repetição
function getQuestions(): QuestionData[] {
  const easyQuestions = shuffleArray(questions.easy).slice(0, 5);
  const mediumQuestions = shuffleArray(questions.medium).slice(0, 5);
  const hardQuestions = shuffleArray(questions.hard).slice(0, 5);
  return [...easyQuestions, ...mediumQuestions, ...hardQuestions];
}

export function Game() {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(
    "Valendo R$1000"
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScoreIndex, setCurrentScoreIndex] = useState(0); // Novo estado para o score
  const [isGameOver, setIsGameOver] = useState(false);
  const [questionsList] = useState<QuestionData[]>(getQuestions());

  const score = [
    2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000,
    300000, 400000, 500000, 1000000,
  ];

  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);

  const handleFeedback = (message: string, increaseScore: boolean) => {
    if (increaseScore) {
      if (currentScoreIndex === score.length - 2) {
        setFeedbackMessage("Valendo 1.000.000");
      } else if (currentScoreIndex === score.length - 1) {
        setIsGameOver(true);
      } else {
        setFeedbackMessage(message);
        setCurrentScoreIndex((prevIndex) => prevIndex + 1); // Avança apenas o score
      }
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Avança a pergunta
    } else {
      setIsGameOver(true);
    }
  };

  const handleJumpQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questionsList.length - 1)
    );
  };

  return (
    <GameContainer>
      {isGameOver ? (
        <GameOverScreen />
      ) : currentQuestionIndex === score.length - 1 ? (
        <VictoryScreen />
      ) : !feedbackMessage ? (
        <>
          <GameContent>
            <div>
              <Question
                onFeedback={handleFeedback}
                arrayScore={score}
                currentQuestionIndex={currentQuestionIndex}
                onJump={handleJumpQuestion}
                question={questionsList[currentQuestionIndex]} // Passa pergunta atual
              />
            </div>
          </GameContent>
          <Score score={score} indice={currentScoreIndex} />{" "}
          {/* Atualizado para usar currentScoreIndex */}
        </>
      ) : (
        <Feedback message={feedbackMessage} />
      )}
    </GameContainer>
  );
}
