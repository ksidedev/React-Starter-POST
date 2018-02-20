export const initialState = {
  theReturnedPostData: {},
  timeStamp: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RETURNED_POST_DATA':
      return Object.assign({}, state, {
        theReturnedPostData: action.options
      })
    case 'UPDATE_TIMESTAMP':
      return Object.assign({}, state, {
        timeStamp: Date.now()
      })
    case 'UPDATE_CONVERT_TIME':
      return Object.assign({}, state, {
        convertTime: action.time
      })
    default:
      return state
  }
}
