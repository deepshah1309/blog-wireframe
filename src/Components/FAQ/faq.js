import React from "react";
import Question from "./Question";
import Search from "../Search/Search";
import "./faq.scss";

const data = [
  {
    title: "How is think the IT is the Studio right vendo for me ?",
    info: "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio, the answer is because we value  your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support.",
  },
];

var d = new Array(5);

function faq() {
  return (
    <>
      <Search title={"FAQ"} />
      <div className="faq">
        <Question title={data[0].title} info={data[0].info} />
        <Question title={data[0].title} info={data[0].info} />
        <Question title={data[0].title} info={data[0].info} />
        <Question title={data[0].title} info={data[0].info} />
        <Question title={data[0].title} info={data[0].info} />
        <Question title={data[0].title} info={data[0].info} />
      </div>
    </>
  );
}

export default faq;
