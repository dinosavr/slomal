import React from 'react';
import PropTypes from 'prop-types';

function PostItem(props) {
  const { post, remove } = props;
  const { id, title, desc } = post;
  return (
    <div className="post mt-3 p-2">
      <div className="post__content">
        <h3 className="post__title">
          {title}
        </h3>
        <div className="post__desc">{desc}</div>
      </div>
      <div className="post__btn">
        <button onClick={() => remove(id)} type="button">
          Remove
        </button>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
  remove: PropTypes.func,
};
PostItem.defaultProps = {
  post: {},
  remove: null,
};

export default PostItem;
