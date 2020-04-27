import React, { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {description};
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = "/";

      console.log(response)
    } catch (error) {
      
    }
  }

  return(
  <>
    <h1>InputTodo</h1>
    <form onSubmit={onSubmitForm}>
      <input 
      type='text' 
      value={description}
      onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  </>);
};

export default InputTodo;
