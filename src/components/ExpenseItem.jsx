import React from "react";
import "./ExpenseItem.css";
import ExpanseDate from "./ExpanseDate";
import Card from "../Card";

function ExpenseItem(props) {
  const { amount, date, title } = props.expense;

  return (
    <li>
      <Card className="expense-item">
        <ExpanseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price ">${amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
