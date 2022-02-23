import React from "react";
import Expenseform from "./Expenseform";
import "./NewExpense.css";
export default function NewExpenses(props) {
  const saveExpenseHnaler = (enteredexpense) => {
    const expenseData = {
      ...enteredexpense,
      id: Math.random().toString(),
     
    };
    props.addExpense(expenseData)
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <Expenseform onSaveExpense={saveExpenseHnaler} />
    </div>
  );
}
