import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Madlib from '../containers/Madlib';

export default class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Madlib></Madlib>
        <Footer></Footer>
      </>
    );
  }
}

