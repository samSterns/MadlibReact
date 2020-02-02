import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    text: {},
    words: []
  }

  handleChange = ({ target }) => {
    this.setState(previousState =>  ({
      ...previousState, 
      text: { ...previousState.text, [target.name]: target.value }
    }));
  }


  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));
 
  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    this.setState(previousState => ({
      ...previousState, 
      words: [
        this.state.text['0'],
        this.state.text['1'],
        this.state.text['2'],
        this.state.text['3'],
        this.state.text['4'],
        this.state.text['5'],
        this.state.text['6'],
        this.state.text['7'],
        this.state.text['8'],
        this.state.text['9'],
        this.state.text['10'],
        this.state.text['11'],
      ]
    }));
  }

  handleReset = ({ target }) => {
    this.setState(previousState =>  ({
      ...previousState, 
      text: {
        'O': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        '1O': '',
        '11': '',
      }
    })
    );
  }
  


  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange}  text={this.state.text} onReset={this.handleReset} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
