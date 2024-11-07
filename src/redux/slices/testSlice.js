import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "todos",
  initialState: {
    tests: [],
  },
  reducers: {
    addTest: (state, action) => {
      const { id, newTodo } = action.payload;

      const currentFind = state.tests.find((item) => item.id === id);
      if (currentFind) {
        currentFind.currentTests.push(newTodo);
      }
    },

    addOption: (state, action) => {
      const { data, cardId, itemId } = action.payload;

      const main = state.tests.find((item) => item.id === itemId);
      if (main) {
        const card = main.currentTests.find((item) => item.cardId === cardId);
        if (card) {
          card.questionCard.push(data);
        }
      }
    },

    testRemov: (state, action) => {
      const { mainId, parentId, currentId } = action.payload;

      const main = state.tests.find((item) => item.id === mainId);
      if (main) {
        const card = main.currentTests.find((item) => item.cardId === parentId);
        if (card) {
          card.questionCard = card.questionCard.filter(
            (item) => item.questionId !== currentId
          );
        }
      }
    },

    loginHanlder: (state, action) => {
      console.log(action);

      if (
        action.payload.userData.email === "admin@gmail.com" &&
        action.payload.userData.password === "admin123"
      ) {
        action.payload.navigate("/main");
      }
    },
    formRequest: (state, action) => {
      state.tests.push(action.payload);
    },

    quetionChecbox: (state, action) => {
      console.log(action.payload);

      const { mainId, cardId, questionId } = action.payload;

      const main = state.tests.find((item) => item.id === mainId);
      if (main) {
        const card = main.currentTests.find((item) => item.cardId === cardId);
        if (card) {
          const question = card.questionCard.find(
            (q) => q.questionId === questionId
          );
          if (question) {
            question.checked = !question.checked;
          }
          {
            action.payload.navigate("/Tests");
          }
        }
      }
    },
  },
});

export const {
  addTest,
  testRemov,
  loginHanlder,
  formRequest,
  addOption,
  editText,
  quetionChecbox,
} = testSlice.actions;
