const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('api', {
  testInvoke: (args) => ipcRenderer.invoke('test-invoke', args),
})