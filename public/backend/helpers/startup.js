const settings = require('electron-settings')

const startup = async () => {

  await configurePersistentStorage()
  
}
module.exports = startup



////////////////




const configurePersistentStorage = async () => {
  await settings.configure({
    prettify: true,
    dir: './'
  })

  // Defaults
  if(!settings.hasSync('settings.pollingInterval') ){
    settings.setSync('settings.pollingInterval', 3000)
  }
}