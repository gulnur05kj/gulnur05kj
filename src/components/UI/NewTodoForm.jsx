import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { formRequest } from "../../redux/slices/testSlice";
import { useNavigate } from "react-router-dom";

export const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now().toString(),
      title: inputValue,
      currentTests: [],
    };
    dispatch(formRequest(data));
    navigate("/new-questions");
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        required
        id="outlined-required"
        label="Ведите название теста"
        value={inputValue}
        onChange={handleChange}
      />
      <StyledButton variant="contained" color="success" type="submit">
        Создать
      </StyledButton>
    </StyledForm>
  );
};
const StyledButton = styled(Button)({
  height: "55px",
});
const StyledForm = styled.form`
  width: 400px;
  margin: 200px auto;
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  -webkit-box-shadow: 11px 4px 54px 16px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 11px 4px 54px 16px rgba(34, 60, 80, 0.2);
  box-shadow: 11px 4px 54px 16px rgba(34, 60, 80, 0.2);
`;
