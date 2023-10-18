import { expenses as DUMMY_EXPENSES } from "./components/expenses";
import "./expenses.css";
import Card from "./Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import NewExpanse from "./Newexpanse/NewExpanse";
import ExpensesList from "./components/ExpensesList";
import Chart from "./components/Charts/Chart";

function App() {
  const [expense, setExpenses] = useState(DUMMY_EXPENSES);
  const [filterYear, setFilterYear] = useState("2023");

  const newExpensesData = (data) => {
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterdExpenses = expense.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear;
  });

  const chartDatePoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expanse of filterdExpenses) {
    const expanseMonth = expanse.date.getMonth();
    chartDatePoints[expanseMonth].value = expanse.amount;
  }

  return (
    <div>
      <NewExpanse newExpensesData={newExpensesData} />
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <Chart dataPoints={chartDatePoints} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
}

export default App;
