// Créer des mock pour les endpoints suivant:

/*
  @endpoint: /login
  @method: POST
  @params: { email: <text>, password:<text> }
  @response: { success: <boolean>, user: {name: <text>, avatar_url:<string>} }
*/

const mockLogin = (endpoint, paramRequest) => new Promise((resolve, reject) => {

  setTimeout(()=>{

    const random = Math.floor(Math.random() * 100);
    console.log(random);

    if (random % 2 == 0) {

      //utilisateur connecté
      resolve({
        success:true, 
        user: {
          name: 'mathilde', 
          avatar_url: 'https://my_photo.png'
        }
      })

      reject('Error 404')
    
    } else {

      resolve({
        success:false,
        user : {}
      })

      reject('error')

    }

  }, 3000);

})

/*
  @endpoint: /sendMessage
  @method: POST
  @params: { text: <text>, timestamp:<number>, recipient_id:<number> }
  @response: { success: <boolean>, delivered: <boolean>} }
*/

const mockSendMessage = (endpoint, paramRequest) => new Promise((resolve, reject) => {
  setTimeout(()=> {

    let random = Math.floor( Math.random() * 10);

    if (random % 2 == 0) {

      //message envoyé
      resolve({
        success: true,
        delivered: false,
      })

    } else {

      reject({
        success: false,
        delivered : false,
      })
    }
  }, 3000)
})

/*
  @endpoint: /newMessage
  @method: GET
  @params: {}
  @response: { success: <boolean>, from: <number>} }
*/

const mockNewMessage = (endpoint, paramRequest) => new Promise((resolve, reject) => {

  setTimeout(()=> {

    //nouveau message reçu
    resolve({
      success: true,
      from: 567
    })

    reject('error')

  }, 3000)
})

/*
  @endpoint: /loadNewMessages
  @method: POST
  @params: { id_new_messages: <number> }
  @response: { success: <boolean>, {nb_message: <number>, messages: [{timestamp:<number>, body:<text> }] }} }
*/

const mockLoadNewMessages = (endpoint, paramRequest) => new Promise((resolve,reject) => {

  setTimeout(() => {

    resolve({
      success: true,
      nb_message: 2, 
      messages : [
        {
          timestamp: '1621010382',
          body: 'bonjour'
        },
        {
          timestamp: '1621010482',
          body: 'au revoir'
        }
      ]
    })

    reject('error')

  },3000)
})


module.exports = {
  mockLogin, 
  mockSendMessage,
  mockNewMessage,
  mockLoadNewMessages
}