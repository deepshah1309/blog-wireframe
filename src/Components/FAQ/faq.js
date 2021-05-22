import React,{useState} from "react";
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

function Faq() {
  const [obj,setObj]=useState({email:"",Query:""});
  console.log(obj);
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
      <div className="FAQ_creation">
        <div className="TitleBox"><b>Ask Me</b></div>
        <div className="FAQ_inputbox">
            <div className="emailbox">
              <div className="part1"><label htmlFor="email">Email</label></div>
              <div className="part2"><input type="email" value={obj.email} onChange={(e)=>{setObj({...obj,[e.target.name]:e.target.value})}} id="email" name="email" placeholder="Enter email"></input></div>
            </div>
            <div className="querybox"><textarea placeholder="Ask Your Queries here" rows="20" name="Query" value={obj.Query} onChange={(e)=>{setObj({...obj,[e.target.name]:e.target.value})}}></textarea></div>
            <div className="faqsubmit"><button className="FAQ_POST">POST</button></div>
        </div>

      </div>
    </>
  );
}

export default Faq;
