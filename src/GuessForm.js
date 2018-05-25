import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { guess } from './store/number.js'

class GuessForm extends PureComponent {
  render() {
    const {
      handleSubmit,
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fill in your Number:</label>
          <div>
            <Field
              name="number"
              component="input"
              type="number"
            />
          </div>
        </div>
        <div>
          <button type="submit">
            GUESS?
       </button>
        </div>
      </form>
    )
  }
}

const onSubmit = ({ number }, dispatch) => {
  dispatch(guess(number))
}

export default reduxForm({
  form: 'guess', // a unique identifier for this form
  onSubmit, // same as onSubmit: onSubmit

})(GuessForm)