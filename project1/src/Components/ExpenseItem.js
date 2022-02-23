import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  // const month=new Date.toLocaleDateString('en-US', s 'long')
  // let date=new Date()
  const [chnageTitle, setChnageTitle] = useState(props.title);
  const changeBtnHandler = () => {
    setChnageTitle("new title");
    console.log("clicked", chnageTitle);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <div >{date.toISOString()}</div>
      <div >{date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2 className="">{chnageTitle}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={changeBtnHandler}>Change Title</button>
    </div>
  );
}
