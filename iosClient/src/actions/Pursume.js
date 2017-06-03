import axios from 'axios';

function sendingResponse (response) {
  return {
    type: 'SENDING_RESPONSE',
    response
  }
};

function sentResponseNext (next) {
  return {
    type: 'SENT_RESPONSE_NEXT',
    next
  }
};

function sendResponseError (getError) {
  return {
    type: 'SEND_RESPONSE_ERROR',
    getError
  }
}

export function sendResponse (response) {
  return (dispatch, getState) => {
    //write to DB for connection insert
    console.log('INSIDE SENDRSPONSE ACTION', response)
    dispatch(sendingResponse(response));

    const oldMatches = getState().Matches.allMatches.slice();
    oldMatches.shift();

    dispatch(sentResponseNext(oldMatches));
    // dispatch(sendResponseError('error'));
  }
}
