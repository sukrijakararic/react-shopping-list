import React, { useState } from "react";

export const ShoppingInput = ({ setItem }) => {
  const [text, setText] = useState(""); // we use the state hook here to catch the change of typing into the input. When i type into the input below, it will change the text state

  const handleChange = (e) => setText(e.target.value); // This function will change the state of text of whatever is written

  const handleSubmit = (e) => { // This function will add a new object into the items array in the app component everytime we submit the form
    e.preventDefault(); // stop the page from refreshing when reloading
    setItem((oldState) => [ // set item will take the current Item state from App.jsx and then (below)
      ...oldState, /* it wil copy the old state and add the new item object below to that old state which will update the array everytime a new shopping list item is created so 
                    the array keeps changing yet it keeps all its previous items*/
      { text, done: false, id: crypto.randomUUID() }, /* when a new item is created, its created into an object with the following values. text is the text state, and done is 
                                                      is responsible for the done button. When the button is clicked, it will change the value to true */
    ]);
    setText(""); // after all the logic has fired off, this will set the input text back to empty
  };

  return (
    <form onSubmit={handleSubmit}>
      
        {/*The value of the input is text so that its tied together and the onChange just calls the handleChange function. onChange fires everytime the text input changes */}
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
