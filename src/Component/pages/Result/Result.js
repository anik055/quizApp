import React from "react";
import "./result.css";
import gif from "../../../images/result.gif";
import { getItem } from "../../../Helper/Ls";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const quizData = getItem("quizApp");
  const countRightAnswer = quizData?.currentQuizes.reduce(
    (total, curr) =>
      curr.correctAnswer === curr.givenAnswer ? total + 1 : total + 0,
    0
  );
  return (
    <>
      <div className="result ">
        <div className="resultItem score">
          <div>Your score is {countRightAnswer} out of 10</div>
        </div>
        <div className="resultItem">
          {" "}
          <img src={gif} alt="" />{" "}
        </div>
      </div>
      <div className="newQuizBtn">
        <Button
          onClick={() => {
            navigate("/quiz");
          }}
        >
          Take new Quiz
        </Button>
      </div>
    </>
  );
}
