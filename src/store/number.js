const initialState = {
  done: false,
  guesses: [],
  number: 0,
}


export const guess = (number) => ({
  type: 'GUESS',
  payload: parseInt(number, 10),
})

export const newGame = () => ({
  type: 'NEW_GAME',
  payload: parseInt(Math.floor(Math.random() * 100), 10),
})

export const reducer = (state = initialState, action) => {
  if (action.type === 'NEW_GAME') {
    return {
      done: false,
      guesses: [],
      number: action.payload,
    }
  }
  if (action.type === 'GUESS') {
    return {
      ...state,
      done: action.payload === state.number,
      guesses: [action.payload, ...state.guesses],
    }
  }
  return state
}


