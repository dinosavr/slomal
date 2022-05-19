import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

export default function PostList(props) {
  const { posts, title, remove } = props;

  PostList.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        desc: PropTypes.string,
      }),
    ),
    title: PropTypes.string,
    remove: PropTypes.func,
  };
  PostList.defaultProps = {
    posts: [],
    title: 'No time to die',
    remove: null,
  };

  const isPostsNotEmpty = posts.length !== 0;

  return (
    <div className="PostList">
      <h1 className="text-center">{title}</h1>
      {isPostsNotEmpty ? (
        posts.map((post) => <PostItem remove={remove} post={post} key={post.id} />)
      ) : (
        <h3 className="noPostMsg text-center">No posts. Sorry ... </h3>
      )}
    </div>
  );
}
