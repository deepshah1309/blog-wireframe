import React, { useState } from "react";
import Question from "./Question";
import Search from "../Search/Search";
import "./faq.scss";

function Faq() {
  //Hook to change the inputs and keep track of new Object
  const [data,setData]=useState({
    title: "How is think the IT is the Studio right vendo for me ?",
    email:"",
    Query:""

  });
  //Here is the demo Array That we will be getting from API Calls
  const [FaQArray, setFaqArray] = useState([
    {
      title: "How is think the IT is the Studio right vendo for me ?",
      email: "abc",
      Query:
        "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio the answer is because we value your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support",
    },
    {
      title: "How is think the IT is the Studio right vendo for me ?",
      email: "abc",
      Query:
        "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio the answer is because we value your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support",
    },
    {
      title: "How is think the IT is the Studio right vendo for me ?",
      email: "abc",
      Query:
        "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio the answer is because we value your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support",
    },
    {
      title: "How is think the IT is the Studio right vendo for me ?",
      email: "abc",
      Query:
        "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio the answer is because we value your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support",
    },
    {
      title: "How is think the IT is the Studio right vendo for me ?",
      email: "abc",
      Query:
        "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio the answer is because we value your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support",
    },
    {
      title: "How is think the IT is the Studio right vendo for me ?",
      email: "abc",
      Query:
        "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio the answer is because we value your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support",
    },
    {
      title: "How is think the IT is the Studio right vendo for me ?",
      email: "abc",
      Query:
        "There must be lots of vendors available to do the task. So as the question asks why to think The IT Studio the answer is because we value your work and have every knowledge to provide you with possible turn around time and quality assurance with long term support",
    },
  ]);


  const handleSubmit=(e)=>{
      
      //Before Submission Validation here
      //Make API Call(Axios request Here) to insert new Object In FAQ
      //then update the current state Of array
      setFaqArray(state=>{
        state.push(data);
        return state;
      });
      
  }
  const handleChange=(e)=>{
   setData({...data,[e.target.name]:e.target.value})
   

  
  
  return (
    <>
      <Search title={"FAQ"} />
      <div className="faq">
        {FaQArray.map((item, index) => {
          return (
            <Question
              title={item.title}
              email={item.email}
              Query={item.Query}
            />
          );
        })}
      </div>
      <div className="FAQ_creation">
        <div className="TitleBox">
          <b>Ask Me</b>
        </div>
        <div className="FAQ_inputbox">
          <div className="emailbox">
            <div className="part1">
              <label htmlFor="email">Email</label>
            </div>
            <div className="part2">
              <input
                onChange={handleChange}
                type="email"
                value={data.email}
                id="email"
                name="email"
                placeholder="Enter your email"
              ></input>
            </div>
          </div>
          <div className="querybox">
            <textarea
              onChange={handleChange}
              placeholder="Ask Your Queries here"
              rows="20"
              name="Query"
              value={data.Query}
            ></textarea>
          </div>
          <div className="faqsubmit">
            <button className="FAQ_POST" onClick={handleSubmit}>
              POST
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
