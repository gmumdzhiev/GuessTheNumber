import { createStore } from 'redux'


const initialState = {
  done: false,
  guesses: [],
  number: 5,
}
export const guess = (number) => ({
  type: 'GUESS',
  payload: number,
})

window.guess = guess

const reducer = (state = initialState, action) => {

  if (action.type === 'GUESS') {
    return {
      ...state,
      done: action.payload === state.number,
      guesses: [action.payload, ...state.guesses],
    }
  }
  return state
}

const store = createStore(reducer)

export default store