import Open from "./Open";
import Lembar1 from "./Lembar1";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/lembar1" element={<Lembar1 />} />
      <Route path="/" element={<Open />} />
    </Routes>
    </>
  );
}

export default App;