const { ipcMain } = require('electron')
const cpy = require('cpy')
const _ = require('lodash')
const settings = require('electron-settings')

ipcMain.handle('drives_startAnUpload', async (evt, files) => {
  try{
    console.log('starting copy')

    const source = files
      .filter( file => file.status === 'todo')
      .map( file => file.sourcePath)
    const destination = files[0].destinationPath
    await cpy(source, destination, { concurrency:1, overwrite: false })
      .on('progress', progress => { progressHandler({ progress, evt }) } )
    console.log('done')
    return { error: undefined, success: true }
  }
  catch(error){
    console.error(error)
    return { error: new Error(error.message), success: false }
  }
})

const progressHandler = _.throttle(
  ({ progress, evt }) => {
    console.log(progress)
    evt.sender.send('drives_getCopyProgress', { progress })
  },
  settings.getSync('settings.pollingInterval') || 2000
)