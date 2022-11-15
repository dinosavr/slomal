import React, { useState } from 'react';
import 'normalize.css';
import './styles/App.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PostList from './components/PostList';
import PostForm from './components/UI/buttons/PostForm';
import Filter from './components/Filter';

import { items } from './data/words';
import { Counter } from './features/counter/Counter';

function App() {
  const [posts, setPosts] = useState(items);

  const createPost = (newPost) => {
    const maxId = Math.max(...posts.map((o) => o.id));
    const nextId = (maxId >= 0) ? maxId + 1 : 0;
    setPosts([...posts, { ...newPost, id: nextId }]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  const filterPost = (typeId) => {
    setPosts(items.filter((p) => p.type === typeId));
  };

  return (
    <div className="App">
      <Counter />
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" component="div" gutterBottom>
          Привет
        </Typography>
        <Typography variant="body1" gutterBottom>
          Slomal.ru - это место где мы изменяем подходы к пониманию нашего мира.
          Сложное должно стать простым, а скучное интересным.
        </Typography>
      </Box>

      <PostForm createPost={createPost} />
      <Filter filter={filterPost} />
      <PostList remove={removePost} posts={posts} title="List of posts" />

    </div>
  );
}

export default App;
