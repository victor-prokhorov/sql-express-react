import React, { useEffect, useState } from 'react'

// compopnents 

import EditTodo from './EditTodo'

 export default () => {

  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await  fetch(
        'http://localhost:5000/todos'
      )
      const jsonData = await response.json();
      // console.log(jsonData)

      setTodos(jsonData);
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getTodos();
  }, [])




const deleteTodo = async (id) => {
  console.log('before trycatch block', id)
  try {
    const deletedTodo = await fetch(
      `http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      }
    )
    // console.log(deletedTodo)

      setTodos(todos.filter(todo => todo.todo_id !== id))

  } catch (error) {
    console.error(error.message);
  }
}


// console.log(todos);

  return (
    <>
    <h1>ListTodos</h1>
    <table>
    <caption>Table caption</caption>
    <thead>
        <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
    </thead>
    {todos.sort((a, b) => a.todo_id - b.todo_id).map(todo => (
      <tr key={todo.todo_id}>
        <td>{`* - ${todo.todo_id} - `}{todo.description}</td>
      
      
      {/* pass prop to component */}

        <td>
          <EditTodo
            todo={todo}
          />
        </td>
      
      
        {/* delete button */}
        <td><button onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
      </tr>
    ))

    }
    {/* <tbody>
        <tr>
            <th scope="row">Donuts</th>
            <td>3,000</td>
            <td>3,000</td>
        </tr>
        <tr>
            <th scope="row">Stationery</th>
            <td>18,000</td>
            <td>18,000</td>
        </tr>
    </tbody> */}
</table>
</>
  )
}
