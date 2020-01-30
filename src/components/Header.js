import React from 'react';
import styles from './App.css';

const Header = () => (
  <header className={styles.Header}>
    <nav>
      <ul>
        <li><a className={styles.active} href="#">Home</a></li>
        <li><a href="#">Favorites</a></li>
      </ul>
    </nav>
    <section>
      <h1>Fun Fun Fun Madlibs</h1>
      <h2>Fill in the blanks for Fun Fun Fun</h2>
    </section>
  </header>
);

export default Header; 
