import React, { useState } from "react";
import styles from './../assets/styles/searchBar.module.css'

function SearchBar() {
  const [itemInput, setItemInput] = useState('');

  return (
    <>
      <form className={styles.search} method="get">
        <input
          className={`${styles.searchInput} ${styles.searchIcon}`}
          type="text"
          placeholder="Search"
          name="search"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button className={styles.btnC} id="search">
          <i className="fi fi-rr-search"></i>
        </button>
      </form>
    </>
  )
}

export default SearchBar;