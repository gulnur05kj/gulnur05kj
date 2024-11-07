import React, { useState } from "react";
import { addTest } from "../../redux/slices/testSlice";
import { useDispatch } from "react-redux";
import { Box, Button, Container, CssBaseline, TextField } from "@mui/material";

export const QuetionForm = ({ id, title }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      cardId: Date.now().toString(),
      questionTitle: value,
      questionCard: [],
    };
    dispatch(addTest({ newTodo, id }));
    setValue("");
  };

  return (
    <Box>
      <CssBaseline />
      <Container variant="fixed">
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "100%" }}
            required
            id="outlined-required"
            type="text"
            placeholder="Введите вопрос"
            onChange={handleInputChange}
            value={value}
          />
          <Box />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "100%", marginTop: "20px" }}
          >
            Добавить вопрос
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default QuetionForm;
