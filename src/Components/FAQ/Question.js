import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./faq.scss";

const Question = ({ title, info ,Query,email}) => {
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
      {expanded && <div className="ans">{Query}-by {email}</div>}
    </div>
  );
};

export default Question;
