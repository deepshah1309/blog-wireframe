import React,{useState} from "react";
import Question from "./Question";
import Search from "../Search/Search";
import "./faq.scss";
import {useSelector,useDispatch} from "react-redux";
import {addData} from "../../Actions/FaqAction";
const data1 = [
  {
    title: "How is think the IT is the Studio right vendo for me ?"
  },
];

var d = new Array(5);

function Faq() {

  const [data,setData]=useState({email:"",Query:""});
  const mystate=useSelector((state)=>state.FaQ);
  
  const dispatch=useDispatch();
  console.log(mystate);

  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addData(data));
  }
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
  }
  return (
    <>
      <Search title={"FAQ"} />
      <div className="faq">
      {
          mystate.map((item,index) => {
        
            return  <Question title={data1[0].title} key={index} email={item.email} Query={item.Query} />
            
        })
        
        }
       
      </div>
      <div className="FAQ_creation">
        <div className="TitleBox"><b>Ask Me</b></div>
        <div className="FAQ_inputbox">
            <div className="emailbox">
              <div className="part1"><label htmlFor="email">Email</label></div>
              <div className="part2"><input onChange={handleChange} type="email" value={data.email}  id="email" name="email" placeholder="Enter email"></input></div>
            </div>
            <div className="querybox"><textarea onChange={handleChange} placeholder="Ask Your Queries here" rows="20" name="Query" value={data.Query}></textarea></div>
            <div className="faqsubmit"><button className="FAQ_POST" onClick={handleSubmit}>POST</button></div>
        </div>
        
      </div>

    </>
  );
}

export default Faq;
