import React from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <ClassCounter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
