const { mockLogin, mockSendMessage, mockNewMessage, mockLoadNewMessages} = require ('./MockServiceApi'); 


const url = 'https://www.fake_api.com'

// MOCK LOGIN
const fetchLoginParams = {
    method: 'POST',
    body: JSON.stringify({
        email: 'hello@email.com',
        password: 'salut123@'
    })
}

mockLogin(`${url}/login`, fetchLoginParams)
.then(data => console.log(data))
.catch(error => console.log(error));

// MOCK SEND MESSAGE
const fetchSendMessageParams = {
    method: 'POST',
    body: JSON.stringify({
        text: 'hello', 
        timestamp: '1621010382', 
        recipient_id: 567,
    })
}

mockSendMessage(`${url}/sendMessage`, fetchSendMessageParams)
.then(data => console.log(data))
.catch(error => console.log(error))

// MOCK NEW MESSAGE
const fetchNewMessageParams = {
    method: 'GET',
}

mockNewMessage(`${url}/newMessage`, fetchNewMessageParams)
.then(data => console.log(data))
.catch(error => console.log(error))

// MOCK LOAD MESSAGE
const fetchLoadNewMessagesParams = {
    method: 'POST',
    body: JSON.stringify({ 
        id_new_messages: 300
    })
}

mockLoadNewMessages(`${url}/loadNewMessages`, fetchLoadNewMessagesParams)
.then(data => console.log(data))
.catch(error => console.log(error))