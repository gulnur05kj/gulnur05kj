import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const TodoItemRequest = ({ title }) => {
  return (
    <StyledList>
      <Button variant="contained">Добавить вариант</Button>
      <p>{title}</p>
    </StyledList>
  );
};

const StyledList = styled.li`
  width: 600px;
  height: 55px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
