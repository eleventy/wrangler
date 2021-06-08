const settings = require('electron-settings')

const startup = async () => {
  console.log('Bootstrapping')
  await settings.configure({
    prettify: true,
    dir: './'
  })
  // Defaults
  if(! settings.hasSync('settings.pollingInterval') ){
    settings.setSync('settings.pollingInterval', 3)
  }
  
  const res = await settings.get('settings.pollingInterval')
  console.log({res})
  
}
module.exports = startup