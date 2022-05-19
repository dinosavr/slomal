import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PostForm({ createPost }) {
  const [post, setPost] = useState({
    title: 'Just title',
    desc: 'Just description',
  });

  const addNewPost = () => {
    const newPost = { ...post };
    createPost(newPost);
    setPost({ title: '', desc: '' });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 600,
          mt: 2,
          mb: 2,
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
    </div>
  );
}

PostForm.propTypes = {
  createPost: PropTypes.func,
};

PostForm.defaultProps = {
  createPost: null,
};

export default PostForm;
