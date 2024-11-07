import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOption, addTest } from "../../redux/slices/testSlice";
import { Box, Button, TextField } from "@mui/material";

export const OptionForm = ({ cardId, itemId }) => {
  const dispatch = useDispatch();
  console.log("cardId:", cardId);
  console.log("itemId:", itemId);

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    const data = {
      questionTitle: inputValue,
      questionId: Date.now(),
    };
    dispatch(addOption({ data, cardId, itemId }));
    setInputValue("");
  };

  return (
    <Box>
      <div>
        <TextField
          sx={{ width: "100%" }}
          required
          id="outlined-required"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleClick}
        >
          add
        </Button>
      </div>
    </Box>
  );
};

export default OptionForm;
