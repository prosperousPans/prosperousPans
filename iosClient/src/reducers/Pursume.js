const initialState = {
  sendingResponse: null,
  sendingResponse: null,
};

const Pursume = (state = initialState, action) => {
  switch(action.type) {
    case 'SENDING_RESPONSE':
      return {
        ...state,
        sendingResponse: true        
      }
    case 'SENT_RESPONSE':
      return {
        ...state
      }
    case 'SEND_RESPONSE_ERROR':
      return {
        ...state,
        sendResponseError: action.getError,
        sendingResponse: false
      }
    default:
      return state;
  }
};

export default Pursume; 