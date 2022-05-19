import React, { useState } from 'react';
import 'normalize.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PostList from './components/PostList';
import './styles/App.scss';
import PostForm from './components/UI/buttons/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Item 1', desc: 'Life is short. Be strong 1' },
    { id: 2, title: 'Item 2', desc: 'Life is short. Be strong 2' },
    { id: 3, title: 'Item 3', desc: 'Life is short. Be strong 3' },
  ]);

  const createPost = (newPost) => {
    const maxId = Math.max(...posts.map((o) => o.id));
    const nextId = (maxId >= 0) ? maxId + 1 : 0;
    setPosts([...posts, { ...newPost, id: nextId }]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <PostList remove={removePost} posts={posts} title="List of posts" />

      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" component="div" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom component="div">
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom component="div">
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
          tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
          quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
          tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
          quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
    </div>
  );
}

export default App;
