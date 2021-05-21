import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./faq.scss";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="question">
      <div className="q">
        <h4 onClick={() => setExpanded(!expanded)} className="question-title">
          {title}
        </h4>
        <div className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {expanded && <div className="ans">{info}</div>}
    </div>
  );
};

export default Question;
