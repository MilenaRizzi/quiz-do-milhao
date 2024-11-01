import { FeedBackContainer, FeedbackMessage, RestartGame } from "./styles";

// Feedback.tsx
interface FeedbackProps {
  message: string;
}

export function Feedback({ message }: FeedbackProps) {
  return (
    <FeedBackContainer>
      <div>
        <FeedbackMessage>{message}</FeedbackMessage>
        {message.includes("errada") && (
          <RestartGame to="/">
            Restart Game
          </RestartGame>
        )}
      </div>
    </FeedBackContainer>
  );
}
