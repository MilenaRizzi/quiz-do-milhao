import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { VictoryScreen } from "./pages/VictoryScreen";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/victory" element={<VictoryScreen />} />
    </Routes>
  );
}
