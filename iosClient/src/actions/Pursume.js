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
    let reasonsArr = [];
    response.meetSwitchIsOn ? status = 'accept' : status = 'reject';
    response.professionalSwitchIsOn ? reasonsArr.push(1) : false;
    response.educationSwitchIsOn ? reasonsArr.push(2) : false;
    response.projectSwitchIsOn ? reasonsArr.push(3) : false;
    response.personalSwitchIsOn ? reasonsArr.push(4) : false;

    console.log('reasons', 'reasonsARR' , status, reasonsArr)

    dispatch( sendingResponse(response) );

    axios.post('http://localhost:3000/insert-connection', {
      users_a_id: users_a_id,
      users_b_id: users_b_id,
      status: status
    }).then( connectionID => {
      console.log('connectionID', connectionID);
      console.log('reasonsArr[0]', reasonsArr[0]);

      // reasonsArr.map( (reason_id) => {
        axios.post('http://localhost:3000/insert-reason', {
          connection_id: connectionID,
          reason_id: reasonsArr[0]
        }).then( result => {
          console.log('ISERT REASON result', result);
          dispatch(sentResponse('sent'));
        })      
      // })

    })
    dispatch(sendResponseError('error'));
  }
}
