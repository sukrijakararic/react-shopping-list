import React, { useState } from "react";

export const ShoppingInput = ({ setItem }) => {
  const [text, setText] = useState(""); // we use the state hook here to catch the change of typing into the input. When i type into the input below, it will change the text state

  const handleChange = (e) => setText(e.target.value); // This function will change the state of text of whatever is written

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem((oldState) => [
      ...oldState,
      { text, done: false, id: crypto.randomUUID() },
    ]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      
        {/*The value of the input is text so that its tied together and the onChange just calls the handleChange function. onChange fires everytime the input changes */}
      <input
        type="text"
        placeholder="What do you need to buy?"
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        🛒
      </button>
    </form>
  );
};
