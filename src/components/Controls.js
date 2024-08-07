import React from "react";
import styles from './../assets/styles/controls.module.css'

function Controls() {
  return (
    <>
      <div className={styles.wrapperControl}>
        <div className={styles.controls}>
          <button className={styles.btnC} id="prev">
            <i class="fi fi-sr-rewind"></i>
          </button>
          <button className={`${styles.playPause} ${styles.btnC}`}>
            <i class="fi fi-sr-play play"></i>
          </button>
          <button className={styles.btnC} id="next">
            <i class="fi fi-sr-forward"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls;