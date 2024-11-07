import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOption } from "../redux/slices/testSlice";

export const TestsQuestion = ({ mainId, itemId, questionId }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: itemId,
      questionId: questionId,
      mainId: mainId,
      id: Date.now().toString(),
      title: value,
      optionTests: [],
    };
    try {
      dispatch(addOption(data));
      setValue("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button type="submit">mnjfcgfvhbn</button>
      </form>
    </div>
  );
};

export default TestsQuestion;
