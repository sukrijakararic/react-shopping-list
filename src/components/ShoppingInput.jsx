import React, {useState} from 'react'

export const ShoppingInput = () => {
const [text, setText] = useState('');

const handleChange = e => setItem(e.target.value);

const handleSubmit = (e) => {
  e.prevetDefault();

}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='What do you need to buy?' value={text} onChange={handleChange} />
        <button type='submit' className='btn'>🛒</button>
    </form>
  )
}
