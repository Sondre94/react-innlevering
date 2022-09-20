import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Counter from "./landingpage/counter";
import { useContext } from "react";
import { Context } from "../Context/Context";
import About from "./landingpage/about";

export default function LandingPage() {
  const { count } = useContext(Context);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <h3>{count}</h3>
    </BrowserRouter>
  );
}
