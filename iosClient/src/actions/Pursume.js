import axios from 'axios';

function sendingResponse (response) {
  return {
    type: 'SENDING_RESPONSE',
    response
  }
};

function sentResponse (status) {
  return {
    type: 'SENT_RESPONSE',
    status
  }
};

function sendResponseError (postError) {
  return {
    type: 'SEND_RESPONSE_ERROR',
    postError
  }
}

export function sendResponse (response, users_a_id, users_b_id) {
  return (dispatch, getState) => {    
    let status = '';
    let reason = '';
    response.meetSwitchIsOn ? status = 'accept' : status = 'reject';
    response.professionalSwitchIsOn ? reason = 'professional' : null;
    response.educationSwitchIsOn ? reason = 'education' : null;
    response.projectSwitchIsOn ? reason = 'project' : null;
    response.personalSwitchIsOn ? reason = 'personal' : null;

    dispatch( sendingResponse(response) );

    axios.post('http://localhost:3000/insert-connection', {
      users_a_id: users_a_id,
      users_b_id: users_b_id,
      status: status,
      reason: reason
    }).then( result => {
      dispatch(sentResponse(result.data));
    })
    dispatch(sendResponseError('error'));
  }
}
