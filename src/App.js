import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { newGame } from './store/number'
import GuessForm from './GuessForm'
class App extends Component {
  componentWillMount() {
    this.props.dispatch(newGame())
  }

  render() {
    const {
      number,
      done,
      guesses,
    } = this.props

    if (done) {
      return <div>You have won!</div>
    }

    return (
      <div>
        <GuessForm />
        <ul>
          {guesses.map(guess => (
            <li key={guess}>
              {guess}
              {guess < number ? " TOO LOW" : ''}
              {guess > number ? " TOO HIGH" : ''}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.number.number,
  done: state.number.done,
  guesses: state.number.guesses,
})

export default connect(mapStateToProps)(App);
