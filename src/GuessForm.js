import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { guess } from './store/number'

class GuessForm extends PureComponent {
  render() {
    const {
      handleSubmit,
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <p>Guess a number between 1 - 100.</p>
        <Field
          name="number"
          component="input"
          type="number"
        />
        <button type="submit">
          Guess !
        </button>
      </form>
    )
  }
}

const onSubmit = ({ number }, dispatch) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  dispatch(guess(number))
}

export default reduxForm({
  form: 'guess', // a unique identifier for this form
  onSubmit, // same as onSubmit: onSubmit
  initialValues: {
    number: 8,
  }
})(GuessForm)
