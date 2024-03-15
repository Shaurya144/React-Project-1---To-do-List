
import { useState } from 'react'
import './style.css'
export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    setTodos((currentTodos) => {
      return
    }[...todos, {id: crypto.randomUUID() title:}])
  }
  return(
    <> {/*These are used to write more than one element inside a return*/}
    <form  onSubmit={handleSubmit} className='new-item-form'>
      <div className="form-row">
        <label htmlFor="item">New Item</label> {/* This is a new way of writing comments =) */}
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item'></input>
        </div> 
        <button className='button'>Add</button>
    </form>
    <h1 className='header'>Todo List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className='btn btn-dangers'>Delete</button>
      </li>
    </ul>
  </>)
}
