import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import GuessForm from './GuessForm.js'
class App extends Component {
  render() {
    const {
      number,
      done,
    } = this.props

    if (done) {
      return <div> You have Won ! </div>
    }
    return (
      <div>
        {number}
        <GuessForm />
      </div>
    );
  }
}
const mapStateToPRops = (state) => ({

  number: state.number.number,
  done: state.number.done,
  state: state,
})
export default connect(mapStateToPRops)(App);
