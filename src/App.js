import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/pages/Home/Home";
import Quiz from "./Component/pages/Quiz/Quiz";
import Result from "./Component/pages/Result/Result";
import Nav from "./Component/Main/Navbar/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
