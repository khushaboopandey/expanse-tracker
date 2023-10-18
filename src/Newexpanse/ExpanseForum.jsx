import React from "react";
import "./ExpanseForum.css";
import { useState } from "react";

const ExpanseForum = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expanseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    if (title && amount && date) {
      props.onSaveExpanseDate(expanseData);
      setTitle("");
      setAmount("");
      setDate("");
    }
  };

  const titleChangeHandler = (event) => {
    if (event.target.value === "" || event.target.value.length < 0) {
      return;
    } else {
      setTitle(event.target.value);
    }
  };
  const dateChangeHandler = (event) => {
    if (event.target.value === "" || event.target.value.length < 0) {
      return;
    } else {
      setDate(event.target.value);
    }
  };
  const amountChangeHandler = (event) => {
    if (event.target.value === "" || event.target.value.length < 0) {
      return;
    } else {
      setAmount(event.target.value);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            value={title}
            type="text"
            onChange={(e) => {
              titleChangeHandler(e);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={amount}
            onChange={(e) => {
              amountChangeHandler(e);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-30"
            value={date}
            onChange={(e) => {
              dateChangeHandler(e);
            }}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditingHandler}>
          Cancel
        </button>
        <button type="submit">Add Expanse</button>
      </div>
    </form>
  );
};

export default ExpanseForum;
