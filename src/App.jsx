import React, { useState } from 'react';
import 'normalize.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PostList from './components/PostList';
import './styles/App.scss';
import ButtonCustom from './components/UI/buttons/ButtonCustom';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Item 1', desc: 'Life is short. Be strong 1' },
    { id: 2, title: 'Item 2', desc: 'Life is short. Be strong 2' },
    { id: 3, title: 'Item 3', desc: 'Life is short. Be strong 3' },
  ]);

  const [postsJava] = useState([
    { id: 1, title: 'Item Java 1', desc: 'Life is Java 1' },
    { id: 2, title: 'Item Java 2', desc: 'Life is Java 2' },
    { id: 3, title: 'Item Java 3', desc: 'Life is Java 3' },
  ]);

  const [post, setPost] = useState({ id: 1, title: 'Just title', desc: 'Just description' });

  const addNewPost = () => {
    const newPost = { ...post, id: posts.length + 1 };
    setPosts([...posts, newPost]);
    setPost({ title: '', desc: '' });
  };

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 600,
          mt: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Description"
          variant="outlined"
          value={post.desc}
          onChange={(e) => setPost({ ...post, desc: e.target.value })}
        />
        <Button onClick={addNewPost} variant="contained">
          Add Post
        </Button>
      </Box>
      <ButtonCustom onClick={addNewPost}>Click Me too</ButtonCustom>

      <PostList posts={posts} title="Список постов" />
      <PostList posts={postsJava} title="Список постов Java" />

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
