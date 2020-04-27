import React, { useState } from 'react';

export default ({ todo }) => {
  const [description, setDescription] = useState(todo.description)
  console.log(description)

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      console.log(body);
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
    <input onChange={e => setDescription(e.target.value)} type="text"/>
    <button onClick={(e)=>updateDescription(e)}>Edit</button>
    </>
  )
} 