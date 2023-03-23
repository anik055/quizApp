import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getItem, setItem } from "../../../Helper/Ls";
import "./home.css";

function Home() {
  const [username, setUsername] = useState("");
  const history = useNavigate();

  const handleStartQuiz = () => {
    if (username) {
      const quizData = getItem('quizApp')
      setItem("quizApp", {...quizData, userName:username});
    }
    history("/quiz");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleStartQuiz();
    }
  };

  return (
    <div className="home">
      <div>
        <h2>Welcome to the Quiz App</h2>
        <div>
          <label className="w-full">Enter your name:</label>
          <input
            className="w-full"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Button
          className="startButton w-full"
          variant="primary"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

export default Home;
