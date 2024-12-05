const push = require('web-push')

const vapidKeys = {
  publicKey: 'BHD0zcV9-QgE0W0cRMlA29esKlLsNlC2h6CUne-_gJj3fTH8HdYRmkuf4KE92b6aKgVJLqB28ReP-X-XL5iwZhs',
  privateKey: 'VBuzlubJLF5Ix6cE2CFJ8XQQskDb7SSVbd7DTu84dKw'
}

push.setVapidDetails('mailto:test@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub={}

push.sendNotification(sub,'Test Message')