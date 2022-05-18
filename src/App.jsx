import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.scss';

function App() {
  const [posts] = useState([
    { id: 1, title: 'Item 1', desc: 'Life is short. Be strong 1' },
    { id: 2, title: 'Item 2', desc: 'Life is short. Be strong 2' },
    { id: 3, title: 'Item 3', desc: 'Life is short. Be strong 3' },
  ]);

  const [postsJava] = useState([
    { id: 1, title: 'Item Java 1', desc: 'Life is Java 1' },
    { id: 2, title: 'Item Java 2', desc: 'Life is Java 2' },
    { id: 3, title: 'Item Java 3', desc: 'Life is Java 3' },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов" />
      <PostList posts={postsJava} title="Список постов Java" />
    </div>
  );
}

export default App;
