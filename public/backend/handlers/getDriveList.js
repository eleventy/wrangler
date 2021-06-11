const { ipcMain } = require('electron')
const drivelist = require('drivelist')

ipcMain.handle('drives.getDriveList', async () => {
  try{
    const drives = await drivelist.list()
    return drives
  }
  catch(err){
    console.error(err)
  }
})