import React, { useState } from "react";

export const ListItem = ({ item }) => { // we use destructuring to import the item from items array to this component
  const [finished, setFinished] = useState(item.done);// Here we call useState hook to keep track of the state of the done propery in the item object. It is defualted to false

  const handleClick = () => { // This function will be called to change the item.done to true when the button is clicked.
    setFinished(!finished); // as you can see, we use the setFinished function to invert the finished state(item.done)
  };

  return (
    <li>
      {item.text} {/* This will print the individual item's text property which is set in the ShoppingInput component */}
      {!item.done ? ( // This will display the item.done's button. Basically stating that if the done is true, then show the button
        <button onClick={handleClick} id="btn" className="btn" value={finished}> {/* The value here is set to the finished state which ties them together */}
          <svg
            style={finished ? { color: "green" } : { color: "black" }} // This right here while change the style of the button depending on it's state.
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </button>
      ) : null}
    </li>
  );
};
