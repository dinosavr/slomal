import React from 'react';
import PropTypes from 'prop-types';

function PostItem(props) {
  const { post } = props;
  const { id, title, desc } = post;
  return (
    <div className="post mt-3 p-2">
      <div className="post__content">
        <h3 className="post__title">
          {title}
          {id}
        </h3>
        <div className="post__desc">{desc}</div>
      </div>
      <div className="post__btn">
        <button type="button">Remove</button>
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
};
PostItem.defaultProps = {
  post: {},
};

export default PostItem;
