import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./faq.scss";

const Question = ({ title, info, Query, email }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="question">
      <div className="q">
        <div className="part1">
          <div
            onClick={() => setExpanded(!expanded)}
            className="question-title"
          >
            {title}
          </div>

          <div className="btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {expanded && (
          <div className="part2">
            {Query}-by {email}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
