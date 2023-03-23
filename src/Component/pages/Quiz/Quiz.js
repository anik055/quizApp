import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./quiz.css";
import Timer from "../../Custom/Timer";
import { Button } from "react-bootstrap";
import Loading from "../../Custom/loading";
import { getItem, setItem } from "../../../Helper/Ls";
import Question from "../../Main/Question";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (answer, index) => {
    const ans = [...answers];
    ans[index] = { ...ans[index], givenAnswer: answer };
    setAnswers(ans);
  };

  const handleNextBtnClick = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const quizData = getItem("quizApp");
      const updatedTakenQuizes = quizData?.takenQuizes
        ? [...quizData?.takenQuizes, answers]
        : [answers];
      setItem("quizApp", {...quizData, takenQuizes: updatedTakenQuizes,currentQuizes :  answers});
      navigate("/result");
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((response) => {
        setQuestions(response?.data?.results);
        setLoading(false);
        setAnswers(
          response.data.results.map((item) => {
            return {
              question: item?.question,
              correctAnswer: item?.correct_answer,
              givenAnswer: undefined,
            };
          })
        );
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="quiz">
      {loading && <Loading />}
      {questions?.length ? (
        <>
          <Timer answers={answers} />
          <Question
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            handleAnswer={handleAnswer}
          />
          <div className="buttons">
            <Button
              className="prevButton"
              variant="secondary"
              disabled={currentIndex === 0}
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex((prev) => prev - 1);
                }
              }}
            >
              Previous
            </Button>
            <Button
              onClick={() => handleNextBtnClick()}
              variant={
                currentIndex === questions?.length - 1 ? "primary" : "secondary"
              }
            >
              {currentIndex === questions?.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Quiz;
