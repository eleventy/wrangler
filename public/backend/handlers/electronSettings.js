const settings = require('electron-settings')
const { ipcMain } = require('electron')

ipcMain.handle('settings_getSettings', async (evt, args) => {
  // return settings from persistent storage to the renderer
  const res = await settings.get(args)
  return res
})

ipcMain.handle('settings_setSetting', async (evt, args) => {
  // set settings in persistent storage from the renderer
  settings.set(args.keyPath, args.obj)
})
