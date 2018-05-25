import { createStore } from 'redux'


const initialState = {
  guesses: [],
  number: 5,
}

const reducer = (state = initialState, action) => {
  console.log('action', action)
  return state
}
const store = createStore(reducer)

export default store