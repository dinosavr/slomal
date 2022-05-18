import React from 'react';
import PropTypes from 'prop-types';
import classes from './ButtonCustom.module.scss';

function ButtonCustom(props) {
  const { disabled, children } = props;
  const { MyBtn } = classes;
  return (
    <button type="button" disabled={disabled} className={MyBtn}>
      {children}
    </button>
  );
}

ButtonCustom.propTypes = {
  disabled: PropTypes.string,
  children: PropTypes.string,
};

ButtonCustom.defaultProps = {
  disabled: false,
  children: 'Ok',
};

export default ButtonCustom;
