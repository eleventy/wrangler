const { ipcMain } = require('electron')
const getDriveList = require('./getDriveList')

ipcMain.handle('drives_getDriveList',  async () => {
  console.log('drives_getDriveList!')
  const driveList = await getDriveList()
  return driveList
})

