import React from "react";
import Button from './Button';
import styles from './../assets/styles/mainMenu.module.css';

const CHOICES = [
  { name: 'PlayLists' },
  { name: 'Performers' },
  { name: 'Albums' },
  { name: 'Podcasts' },
]

function MainMenu() {

  function handleUserChoice(choice) {

  }

  return (
    <>
      <h1 className={styles.mainTitle}>My Media Library</h1>
      <nav>
        <ul className={styles.mainNav}>
          {CHOICES.map((choice) => (
            <li>
              <Button
                name={choice.name}
                key={choice.name}
                onClick={() => handleUserChoice(choice)}
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

