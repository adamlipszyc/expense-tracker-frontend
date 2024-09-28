import React, { useState } from "react";
import "./AddExpense.css";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  TextField,
  OutlinedInput,
  FormLabel,
  InputAdornment,
  IconButton,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";

const AddExpense = ({ fetchExpensesCallBack }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(dayjs("2022-04-17"));
  const [description, setDescription] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleAddExpense = async (e) => {
    try {
      const response = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, amount, date, description }),
      });

      if (response.ok) {
        fetchExpensesCallBack();
        setCategory("");
        setAmount(null);
        setDate("");
        setDescription("");
      } else {
        throw new Error("Unable to add expense");
      }
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  return (
    <div className="add-expense-container">
      <button onClick={() => setIsShown(!isShown)}>
        {!isShown ? "Add" : "Close"}
      </button>
      {isShown && (
        <>
          <form onSubmit={handleAddExpense}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="category-container">
                <Box sx={{ minWidth: 300 }}>
                  <FormControl sx={{ minWidth: 300, m: 1, ml: 0 }}>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                      labelId="category-label"
                      id="category"
                      value={category}
                      label="category"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <MenuItem value="Housing">Housing</MenuItem>
                      <MenuItem value="Transportation">Transportation</MenuItem>
                      <MenuItem value="Food/Drink">Food/Drink</MenuItem>
                      <MenuItem value="Healthcare">Healthcare</MenuItem>
                      <MenuItem value="Personal Care">Personal Care</MenuItem>
                      <MenuItem value="Entertainment">Entertainment</MenuItem>
                      <MenuItem value="Debt and Savings">
                        Debt and Savings
                      </MenuItem>
                      <MenuItem value="Insurance">Insurance</MenuItem>
                      <MenuItem value="Education">Education</MenuItem>
                      <MenuItem value="Gifts and Donation">
                        Gifts and Donation
                      </MenuItem>
                      <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
                      <MenuItem value="Taxes">Taxes</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div>
                <FormControl
                  size="small"
                  sx={{ m: 1, ml: 0, minWidth: 300 }}
                  required
                  margin="normal"
                >
                  <InputLabel htmlFor="discount_amount">Amount</InputLabel>
                  <OutlinedInput
                    id="amount"
                    type={"number"}
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    startAdornment={
                      <InputAdornment position="front" sx={{ marginRight: 1 }}>
                        <CurrencyPoundIcon />
                      </InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
              </div>

              <FormControl sx={{ m: 1, ml: 0, minWidth: 300 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    required
                  />
                </LocalizationProvider>
              </FormControl>
              <div>
                <FormControl sx={{ m: 1, ml: 0, minWidth: 300 }}>
                  <TextField
                    label="Description"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    size="small"
                    rows={2}
                    multiline
                  />
                </FormControl>
              </div>
            </Box>
            <button type="submit">Add Expense</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddExpense;
