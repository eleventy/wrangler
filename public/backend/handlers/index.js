const { ipcMain } = require('electron')
const getDriveList = require('./getDriveList')

ipcMain.handle('drives_getDriveList',  async () => {
  const driveList = await getDriveList()
  return driveList
})

