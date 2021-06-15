const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('api', {
  getDriveList: () => ipcRenderer.invoke('drives.getDriveList'),
  settings_getSettings: args => ipcRenderer.invoke('settings.getSettings', args),
  settings_setSetting: args => ipcRenderer.invoke('settings.setSetting', args),
})