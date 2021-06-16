const { ipcMain } = require('electron')
const drivelist = require('drivelist')

ipcMain.handle('drives_getDriveList', async () => {
  try{
    const drives = await drivelist.list()
    return drives
  }
  catch(err){
    console.error(err)
  }
})