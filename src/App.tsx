// App.jsx
import { GlobalStyle } from "./global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
