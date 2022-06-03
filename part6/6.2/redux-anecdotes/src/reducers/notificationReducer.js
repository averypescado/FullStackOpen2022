const notificationReducer = (state="", action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
    case 'CLEAR_MESSAGE':
      return ''
    default:
      return state
  }
}

export const changeNotification = (message) => {
  return {
    type:'SET_MESSAGE',
    message: message
  }
}

export const clearNotification = (message) => {
  return {
    type:'CLEAR_MESSAGE',
  }
}

export const setNotification = (message,length) => {
  return async dispatch => {
    dispatch({
      type: 'SET_MESSAGE',
      message,
    }
    ) 
    setTimeout(() => {dispatch({
      type: 'CLEAR_MESSAGE'
    })},length)
  }
}

export default notificationReducer