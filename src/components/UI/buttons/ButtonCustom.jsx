import React from 'react';
import PropTypes from 'prop-types';
import classes from './ButtonCustom.module.scss';

function ButtonCustom(props) {
  const { disabled, onClick, children } = props;
  const { MyBtn } = classes;
  return (
    <button type="button" disabled={disabled} onClick={onClick} className={MyBtn}>
      {children}
    </button>
  );
}

ButtonCustom.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

ButtonCustom.defaultProps = {
  onClick: null,
  disabled: false,
  children: 'Ok',
};

export default ButtonCustom;
