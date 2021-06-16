const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('api', {
  settings_getSettings: args => ipcRenderer.invoke('settings_getSettings', args),
  settings_setSetting: args => ipcRenderer.invoke('settings_setSetting', args),

  drives_getDriveList: () => ipcRenderer.invoke('drives_getDriveList'),
  drives_scanSourceDrive: args => ipcRenderer.invoke('drives_scanSourceDrive', args),
})