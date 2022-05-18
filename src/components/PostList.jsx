import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

export default function PostList(props) {
  const { posts, title } = props;

  PostList.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        desc: PropTypes.string,
      }),
    ),
    title: PropTypes.string,
  };
  PostList.defaultProps = {
    posts: [],
    title: 'No time to die',
  };

  return (
    <div className="PostList">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
