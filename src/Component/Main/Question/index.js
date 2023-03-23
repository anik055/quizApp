import React from "react";
import RadioInput from "../../Custom/RadioInput";

export default function Question({
  questions,
  currentIndex,
  answers,
  handleAnswer,
}) {
  return (
    <>
      <div className="question">
        {currentIndex + 1}. {questions?.[currentIndex]?.question}
      </div>
      {[
        questions[currentIndex]?.correct_answer,
        ...questions[currentIndex]?.incorrect_answers,
      ].map((option, index) => {
        return (
          <RadioInput
            id={index}
            name="myRadioGroup"
            value={option}
            checked={answers?.[currentIndex]?.givenAnswer === option}
            onChange={() => {
              handleAnswer(option, currentIndex);
            }}
            label={option}
          />
        );
      })}
    </>
  );
}
