import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MainMenu from './components/MainMenu'
import Controls from './components/Controls';
import styles from './App.module.css';

import logo from './assets/img/icon/dj-turntable-vinyl-disc.svg';

function App() {
  const [playLists, setPlayLists] = useState(null);
  const [performers, setPerformers] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [podcasts, setPodcasts] = useState(null);
  const [player, setPlayer] = useState(true)

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={`${styles.AppContainer} ${styles.header}`}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <SearchBar />
        </div>
      </header>
      <main className={styles.AppMain}>
        <div className={styles.AppContainer}>
          <MainMenu />
          <section className={styles.AppContent}></section>
          {player && (
            <section className={styles.AppPlayer}>
              <Controls />
            </section>
          )}
        </div>
      </main>
      <footer className={styles.AppFooter}>
        <div className={styles.AppContainer}>
          <p>© 2024 Santa-Ana</p>
        </div>
      </footer>
    </div>
  )
}

export default App;
