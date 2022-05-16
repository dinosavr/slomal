import React from 'react';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="post mt-3 p-2">
        <div className="post__content">
          <h3 className="post__title">Title</h3>
          <div className="post__desc">
            All about me. All about me. All about me. All about me.
          </div>
        </div>
        <div className="post__btn">
          <button type="button">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
