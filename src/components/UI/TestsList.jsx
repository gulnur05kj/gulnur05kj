import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const TestsList = () => {
  const { tests } = useSelector((state) => state.tests);

  return (
    <ul>
      {tests.map((item, index) => (
        <div key={item.id} {...item}>
          <div
            style={{
              width: "100%",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid grey",
              gap: "20px",
            }}
          >
            {index + 1})
            <Typography
              sx={{
                fontSize: "15px",
              }}
            >
              {item.title}
            </Typography>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default TestsList;
