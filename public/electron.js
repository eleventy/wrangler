const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
require('./backend/handlers')


let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: isDev 
        ? path.join(app.getAppPath(), './public/backend/preload.js')
        : path.join(app.getAppPath(), './build/backend/preload.js'),
      contextIsolation: true,
    },
  })
  mainWindow.removeMenu()

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  mainWindow.setIcon(path.join(__dirname, 'images/appicon.ico'))

  if (isDev) {
    mainWindow.webContents.on('did-frame-finish-load', () => {
      mainWindow.webContents.openDevTools({ mode: 'detach' })
    })
  }
}

// ((OPTIONAL)) Setting the location for the userdata folder created by an Electron app. It default to the AppData folder if you don't set it.
app.setPath(
  'userData',
  isDev
    ? path.join(app.getAppPath(), 'userdata/') // In development it creates the userdata folder where package.json is
    : path.join(process.resourcesPath, 'userdata/') // In production it creates userdata folder in the resources folder
)

app.whenReady().then(async () => {
  nativeTheme.themeSource = 'dark'
  await createWindow()
  // startup()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

process.on('uncaughtException', (error) => {
  console.log(`Exception: ${error}`)
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
