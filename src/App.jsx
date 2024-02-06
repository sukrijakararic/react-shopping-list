import React, {useState} from 'react'
import './App.css'
import { Header } from './components/header'
import { ShoppingInput } from './components/ShoppingInput'
import { List } from './components/List'

function App() {

    const [item, setItem] = useState([])


  return (
    <>
    <Header />
  
    <ShoppingInput setItem={setItem} />
    
    <ul>
      {item.map((stuff) => ( <List stuff={stuff} key={stuff.id} />))}
    </ul>
  

    </>
  )
}

export default App
