const initialState = {

}

export const addNumber = (number) => ({
  type: 'ADD_NUMBER',
  payload: number,
})
export const removeNumber = (number) => ({
  type: 'REMOVE_NUMBER',
  payload: number,
})

export const reducer = (state = initialState, action) => {
  console.log('action', action)
  if (action.type === 'ADD_NUMBER') {
    return {
      numbers: [action.payload, ...state.numbers]
    }
  }
  if (action.type === 'REMOVE_NUMBER') {
    return {
      numbers: state.numbers.filter(number => number !== action.payload),
    }
  }
  return state
}