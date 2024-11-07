import React from "react";

export const TestsBuilder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="text" />
      <butto type="submit" n>
        save
      </butto>
    </form>
  );
};

export default TestsBuilder;
