import React from 'react'
import ExpenseItem from "../Components/ExpenseItem";
import "../Components/ExpenseDate.css";
import Card from "../Components/Card";
import NewExpenses from "../Components/NewExpenses/NewExpenses";
import ExpenseFilter from "../Components/NewExpenses/ExpenseFilter";

import { useState } from "react";
export default function MainExpenses() {
    const [filteredYear, setFilteredYear] = useState("2020");
    const [addInput, setAddInPut] = useState(expenses);
    const filterChangeHandler = (selectYear) => {
      setFilteredYear(selectYear);
    };
  
    const addEXpenseHandler = (expense) => {
      setAddInPut(prevInput=>{
        return[expense,...prevInput]
      })
  
    };
    const expenses = [
        {
          id: 1,
          title: "MY Money",
          amount: 890,
          date: new Date("11/11/2011"),
        },
        {
          id: 2,
          title: "Pizza party",
          amount: 870,
          date: new Date("3/1/2011"),
        },
        {
          id: 3,
          amount: 780,
          title: "Birthday",
          date: new Date("2/9/2011"),
        },
        {
          id: 4,
          amount: 877,
          title: "Chrismas",
          date: new Date("8/9/2011"),
        },
      ];
  return (
    <>
     <NewExpenses addExpense={addEXpenseHandler} />
      <Card className="expense">
        <ExpenseFilter
          selected={filteredYear}
          yearChangeHandler={filterChangeHandler}
        />
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}

        {/* <ExpenseItem
        title={list.title}
        date={list.date}
        amount={list.amount}
      /> */}
        {/* <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      /> */}
      </Card>
    
    </>
  )
}
