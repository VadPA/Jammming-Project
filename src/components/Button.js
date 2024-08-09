import React from "react";
import styles from './../assets/styles/button.module.css';

function Button(props) {

  const handlerClick = (e) => {
    props.onSelectButton(e.target.value);
    console.log(e.target.value)
  }
  return (
    <>
      <button className={styles.btn} onClick={handlerClick} value={props.name}>{props.name}</button>
    </>
  )
}

export default Button;