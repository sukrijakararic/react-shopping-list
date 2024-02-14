import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { ShoppingInput } from "./components/ShoppingInput";
import { ListItem } from "./components/ListItem";

function App() {
  const [items, setItem] = useState([]);

  return (
    <>
      <Header />

      <ShoppingInput setItem={setItem} />

      <ul>
        {items.map((item) => {
          return <ListItem item={item} key={item.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
