const settings = require('electron-settings')

const startup = async () => {

  await configurePersistentStorage()
  
}
module.exports = startup



////////////////




const configurePersistentStorage = async () => {
  await settings.configure({
    prettify: true,
    dir: './settings'
  })

  // Defaults
  if(!settings.hasSync('settings.pollingInterval') ){
    settings.setSync('settings.pollingInterval', 3000)
  }
  if(!settings.hasSync('projects') ){
    settings.setSync('projects', { 
      activeProject : 'chooseProject',
      allProjects : []
    })
  }
}