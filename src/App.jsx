import React, { useState } from 'react';

function App() {
  const initialText = 'Hi, I am simple text.';
  const [text, setText] = useState(initialText);

  function onChangeText(value) {
    setText(value);
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <input type="text" value={text} onChange={(event) => onChangeText(event.target.value)} />
    </div>
  );
}

export default App;
