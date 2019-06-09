import React from 'react';
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
  return (
    <div className={styles.InputComponent}>
      <h1 onClick={props.minusClick}>-</h1>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
      />
      <h1 onClick={props.plusClick}>+</h1>
    </div>
  );
};

export default Input;
