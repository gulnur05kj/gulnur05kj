import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { NewTodoForm } from "./NewTodoForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginHanlder } from "../../redux/slices/testSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };
    navigate("/main");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        value={email}
        onChange={handleEmail}
      />
      <TextField
        required
        id="outlined-required"
        label="Password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <StayledButton variant="contained" type="submit">
        login
      </StayledButton>
    </StyledForm>
  );
};
const StayledButton = styled(Button)({
  height: "55px",
  background: " rgb(131,58,180);",
  background:
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
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
const StyledTextField = styled(TextField)({});
