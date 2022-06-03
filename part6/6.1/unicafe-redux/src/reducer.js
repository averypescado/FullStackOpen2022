const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const good_counter = {...state, good: state.good+1}
      return good_counter
    case 'OK':
      const ok_counter = {...state, ok: state.ok+1}
      return ok_counter
    case 'BAD':
      const bad_counter = {...state, bad: state.bad+1}
      return bad_counter
    case 'ZERO':
      const reset = {good:0, ok: 0, bad:0}
      return reset
    default: return state
  }
  
}

export default counterReducer