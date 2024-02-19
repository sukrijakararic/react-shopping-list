import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { ShoppingInput } from "./components/ShoppingInput";
import { ListItem } from "./components/ListItem";

function App() {
  const [items, setItem] = useState([]); // items has been initialized as an empty array

  return (
    <>
      <Header />
      
      {/* we pass set item to the Shopping input so we can use it to set the state of the items array */}
      <ShoppingInput setItem={setItem} />

      <ul>

        {/*The "items" here represents the array that holds each individual "item" so mapping the item from the items array is taking each item and displaying it*/}
        {items.map((item) => {
          {/* we pass the individaul items to the ListItem component to be used in that respective component */}
          return <ListItem item={item} key={item.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
