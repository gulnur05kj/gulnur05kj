import React, { useState } from "react";

import { Box, Button, Checkbox, Container, Typography } from "@mui/material";
import QuetionForm from "./QuetionForm";
import { useDispatch, useSelector } from "react-redux";
import OptionForm from "./OptionForm";
import { quetionChecbox, testRemov } from "../../redux/slices/testSlice";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import TestsList from "./TestsList";

export const NewFormRequest = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const [price, setPrice] = useState(false);
  const dispatch = useDispatch();

  const handleSaveClik = () => {
    setPrice(true);
    dispatch(quetionChecbox(true));
    navigate("/Tests");
  };

  const navigate = useNavigate();
  const { tests } = useSelector((state) => state.tests);
  console.log(tests);

  const handleClick = (cardId) => {
    setActiveCardId((prevCardId) => (prevCardId === cardId ? null : cardId));
  };

  const handlerClick = (mainId, parentId, currentId) => {
    console.log({ mainId, parentId, currentId });
    dispatch(testRemov({ mainId, parentId, currentId }));
  };

  return (
    <Box>
      {tests?.map((item) => (
        <div key={item.id}>
          <h1 style={{ marginLeft: "200px" }}>{item.title}</h1>

          <QuetionForm {...item} />
          <Container>
            {item.currentTests?.map((question) => (
              <Box key={question.cardId} {...question}>
                <Box
                  sx={{
                    border: "1px solid grey",
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "27px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {question.questionTitle}
                  </Typography>
                </Box>
                {question?.questionCard.map((text, index) => (
                  <div key={text.questionId}>
                    <p
                      component="section"
                      style={{
                        p: 2,
                        border: "1px solid grey",
                        display: "flex",
                        alignItems: "center",
                        gap: "0px",
                      }}
                    >
                      <Checkbox
                        onClick={() => quetionChecbox(question.cheked)}
                        style={{ marginLeft: "20px" }}
                      />
                      {index + 1}){}
                      {text.questionTitle}
                      <AiFillDelete
                        onClick={() =>
                          handlerClick(
                            item.id,
                            question.cardId,
                            text.questionId
                          )
                        }
                        style={{
                          marginLeft: "20px",
                          cursor: "pointer",
                          fontSize: "19px",
                        }}
                      />
                    </p>
                  </div>
                ))}
                {activeCardId === question.cardId ? (
                  <OptionForm cardId={question.cardId} itemId={item.id} />
                ) : (
                  <Button onClick={() => handleClick(question.cardId)}>
                    Добавить вариант
                  </Button>
                )}
              </Box>
            ))}
          </Container>
        </div>
      ))}
      <Button
        onClick={() => handleSaveClik()}
        variant="contained"
        type="submit"
        sx={{ width: "200px", marginLeft: "300px", marginTop: "50px" }}
      >
        сохранит
      </Button>
      {price && <TestsList />}
    </Box>
  );
};
