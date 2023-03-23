import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { getItem, setItem } from "../../../Helper/Ls";

function Timer({ answers }) {
  const [timeRemaining, setTimeRemaining] = useState(3 * 60);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      clearInterval(intervalRef.current);
      const prevTakenQuizes = getItem("takenQuizes");
      setItem("takenQuizes", [...prevTakenQuizes, answers]);
      setItem("currentQuizes", answers);
      navigate("/result");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="timer">
      Times Remaining :
      <b>
        {" "}
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </b>
    </div>
  );
}

export default Timer;
