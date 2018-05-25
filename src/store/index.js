import { createStore, combineReducers } from 'redux'
import { reducer as numberReducer } from '../store/number.js'

const reducer = combineReducers({
  number: numberReducer
})
const store = createStore(reducer)

export default store