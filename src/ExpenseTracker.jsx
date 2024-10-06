import React, { useState, useEffect, useCallback } from "react";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter/Filter";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState(new Set());
  console.log(expenses);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = useCallback(async () => {
    try {
      const response = await fetch("./api/expenses");
      const data = await response.json();
      setExpenses(data.expenses);
    } catch (error) {
      console.error("Error fetching expenses: ", err);
    }
  }, [setExpenses]);

  const handleDeleteExpense = useCallback(
    async (id) => {
      try {
        const response = await fetch(`/api/expenses/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchExpenses();
        } else {
          throw new Error("Error deleting expense");
        }
      } catch (err) {
        console.error("Error deleting expense:", err);
      }
    },
    [fetchExpenses]
  );

  const updateCategories = (item) => {
    const newSet = new Set(categories);
    if (newSet.has(item)) {
      newSet.delete(item);
    } else {
      newSet.add(item);
    }
    setCategories(newSet);
  };

  const resetCategories = () => {
    setCategories(new Set());
  };

  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>
      <Filter
        categories={categories}
        updateCategories={updateCategories}
        resetCategories={resetCategories}
      />
      <AddExpense fetchExpensesCallBack={fetchExpenses} />
      <ExpenseList
        expenses={expenses}
        categories={categories}
        handleDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
};

export default ExpenseTracker;
