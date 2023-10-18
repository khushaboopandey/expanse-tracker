import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expanseContent = "No expenses found.";

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback ">{expanseContent}</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </ul>
  );
};

export default ExpensesList;
