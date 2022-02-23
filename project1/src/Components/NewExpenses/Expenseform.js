import React, { useState } from "react";
import "./Expenseform.css";
import moment from "moment";
export default function Expenseform(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredNumber, setenteredNumber] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      number: enteredNumber,
      date: moment(new Date(enteredDate)).format("YYYY-MM-DD"),
    };
    props.onSaveExpense(expenseData)
    setenteredDate("");
    setenteredTitle("");
    setenteredNumber("");
  };
  // const[useInput,setUserInput]=useState({
  //     enteredTitle:"",
  //     enteredNumber:"",
  //     enteredDate:"",
  // })
  //   const titleInputHandler = (e) => {
  //       setUserInput({
  //         ...useInput,
  //         enteredTitle:e.target.value
  //       })
  const titleInputHandler = (e) => {
    setenteredTitle(e.target.value);
  };
  //   const numberInpurHandler = (e) => {
  //     setUserInput({
  //         ...useInput,
  //         enteredNumber:e.target.value
  //       })
  const numberInpurHandler = (e) => {
    setenteredNumber(e.target.value);
  };
  // const dateInputHander = (e) => {
  // setUserInput((prevState)=>{
  //     return{...prevState,enteredDate:e.target.value}
  // });
  // };
  const dateInputHander = (e) => {
    setenteredDate(e.target.value);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleInputHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredNumber}
            onChange={numberInpurHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-12-02"
            max="2022-12-02"
            onChange={dateInputHander}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
