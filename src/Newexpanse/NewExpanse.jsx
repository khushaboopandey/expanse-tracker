import React, { useState } from "react";
import "./NewExpanse.css";
import ExpanseForum from "./ExpanseForum";

const NewExpanse = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpanseDataHandler = (enterdExpanseData) => {
    props.newExpensesData({ ...enterdExpanseData, id: Math.random.toString });
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense ">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expenses</button>
      )}
      {isEditing && (
        <ExpanseForum
          onSaveExpanseDate={saveExpanseDataHandler}
          stopEditingHandler={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpanse;
