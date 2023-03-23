import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../../Helper/Ls";

export default function Nav() {
  const navigate = useNavigate();
  const quizData = getItem("quizApp");
  return (
    <div className="navigation">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        Quiz App
      </div>
      <div className="name">{quizData?.userName || "No Name"}</div>
    </div>
  );
}
