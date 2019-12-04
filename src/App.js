/**
 * @Author: Ali
 * @Date:   2019-12-01T09:21:28+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-12-03T09:33:31+01:00
 */

import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [text,setValue] = useState('')
  const [todos,setTodo] = useState([
    {
      text:'Task one',
      id:1,
      isCompleted:false
    },
    {
      text:'Task two',
      id:2,
      isCompleted:false
    }
  ])
  const handleChange = e => setValue(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    const newTask = {
      text:text,
      id:Date.now(),
      isCompleted:false
    }
    setTodo([newTask, ...todos])
    setValue('')
  }
  const setCompleted = i => {
    const newArr = [...todos]
    newArr[i].isCompleted = !newArr[i].isCompleted
    setTodo(newArr)
  }
  const delTask = (i) => {
    const newArr = [...todos]
    newArr.splice(i,1)
    setTodo(newArr)
  }
  return (
    <div className="App">
      <label htmlFor=""> Hooks Todo React</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new Task"
          value={text}
          onChange={handleChange} required />
        <input type="submit" value="Add a new Task"/>
      </form>
      <div className="todos">
            <ul>
              {todos.map((todo,i) =>
                <div key={todo.id}>
                <li
                  onClick={() =>setCompleted(i)}
                  style={{ color: todo.isCompleted ? 'green' : 'red' }}>
                  {todo.text}
                </li><button onClick={() =>delTask(i)}> Delete Me </button>
            </div>
              )}
            </ul>
      </div>
    </div>
  );
}

export default App;
