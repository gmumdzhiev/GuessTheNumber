const initialState = {
  done: false,
  guesses: [],
  number: 5,
}
export const guess = (number) => ({
  type: 'GUESS',
  payload: parseInt(number, 10),
})

window.guess = guess

export const reducer = (state = initialState, action) => {

  if (action.type === 'GUESS') {
    return {
      ...state,
      done: action.payload === state.number,
      guesses: [action.payload, ...state.guesses],
    }
  }
  return state
}