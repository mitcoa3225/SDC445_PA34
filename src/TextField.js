import React, { useState } from 'react';

function TextField() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Task 2: Form Input</h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />

      <p>Entered Text: {inputValue}</p>
    </div>
  );
}

export default TextField;