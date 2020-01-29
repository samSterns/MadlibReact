import React from 'react';
import styles from './App.css';

const Footer = () => (
  <footer className={styles.Footer}>
    <p>Thanks for playing</p>
    <section className={styles.acknowledgment}>
      <p>❮❯ by <a href="#">Copyright 2020</a> 2020</p>
    </section>
  </footer>
);

export default Footer;
