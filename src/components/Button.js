import React from "react";
import styles from './../assets/styles/button.module.css';

function Button(prop) {
  return (
    <>
      <button className={styles.btn}>{prop.name}</button>
    </>
  )
}

export default Button;