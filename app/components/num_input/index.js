import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

/*
  Text-box component that can be reused for other components. Increment and
  decrement buttons are built into this component.

  Props:
    type: Controls the type of text input.
    name: Name for the specific input so that it can be referenced
    value: Specifies the state value that the component will control
    onChange: Specifies what to do when the textbox gets updated
    minusClick: Specifies the function for clicking the minus sign
    plusClick: Specifies the function for clicking the plus sign
*/
const Input = props => {
  const { type, name, value, changeHandler, minusClick, plusClick } = props;

  return (
    <div className={styles.InputComponent}>
      <button type="button" onClick={minusClick}>
        -
      </button>
      <input type={type} name={name} value={value} onChange={changeHandler} />
      <button type="button" onClick={plusClick}>
        +
      </button>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  changeHandler: PropTypes.func.isRequired,
  minusClick: PropTypes.func.isRequired,
  plusClick: PropTypes.func.isRequired
};

Input.defaultProps = {
  value: 0
};

export default Input;
