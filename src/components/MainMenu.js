import React from "react";
import Button from './Button';
import styles from './../assets/styles/mainMenu.module.css';

const CHOICES = [
  { name: 'PlayLists' },
  { name: 'Performers' },
  { name: 'Albums' },
  { name: 'Podcasts' },
]

function MainMenu(props) {

  function handleUserChoice(e) {
    console.log('Selected ' + e)
  }

  return (
    <>
      <h1 className={styles.mainTitle}>My Media Library</h1>
      <nav>
        <ul className={styles.mainNav}>
          {CHOICES.map((choice) => (
            <li key={choice.name}>
              <Button
                name={choice.name}
                key={choice.name}
                onSelectButton={handleUserChoice}
                aria-label={choice.name}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MainMenu;

