import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    const newTodo = inputValue.trim();

    if (newTodo !== '') {
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <h2>Task 3: Todo List</h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter todo item"
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;