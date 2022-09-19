import "./App.css";
import LandingPage from "./pages/landingpage";
import { Context } from "./Context/Context";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Context.Provider value={{ count, setCount }}>
        <LandingPage />
      </Context.Provider>
    </>
  );
}

export default App;
