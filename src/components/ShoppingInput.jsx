import React, {useState} from 'react'

export const ShoppingInput = ({setItem}) => {
const [text, setText] = useState('');

const handleChange = e => setText(e.target.value);

const handleSubmit = (e) => {
  e.preventDefault();
  setItem((oldState) => [...oldState, {text, done: false, id: crypto.randomUUID()}]);
  setText('');

}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='What do you need to buy?' value={text} onChange={handleChange} />
        <button type='submit' className='btn'>🛒</button>
    </form>
  )
}
