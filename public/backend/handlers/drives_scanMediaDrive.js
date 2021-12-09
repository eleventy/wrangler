const { ipcMain } = require('electron')
const glob = require('glob')
const fs = require('fs')
const path = require('path')

ipcMain.handle('drives_scanMediaDrive', async (evt, drive) => {
  /*
    Scan drive.path for media files with filetypes of drive.fileTypesToCopy
    Return a list of all found files
  */
  try {
    const cwd = getCwd(drive)
    const options = {
      cwd
    }
    const globPattern = getGlobFileExtensionPattern(drive.fileTypesToCopy)
    const filepaths = await glob.sync(globPattern, options)
    const files = getFilesInfo({ filepaths, drive })
    return { error: undefined, files }
  } catch (error) {
    console.error(error)
    return { error, files: [] }
  }
})

/// ////////////

const getCwd = drive => {
  if (drive.type === 'destination') {
    return path.posix.join(drive.path, drive.rootFolder, drive.activeProject)
  }
  return drive.path
}

const getGlobFileExtensionPattern = fileTypesToCopy => {
  //  Turn ['mp3','mp4',...] into '**/*.{mp3,MP3,mp4,MP4}' for file searching
  const extensions = fileTypesToCopy.map(fileType => `${fileType.toLowerCase()},${fileType.toUpperCase()}`)
  const globPattern = `**/*.{${extensions}}`
  return globPattern
}

/// ////////////

const getFilesInfo = ({ filepaths, drive }) => {
  // For each file in the array, get file info ( size, ...)
  const files = filepaths.map(filePath => {
    const fullPath = path.posix.join(getCwd(drive), filePath)
    const fileInfo = fs.statSync(fullPath)
    return {
      path: fullPath,
      size: fileInfo.size,
      created: fileInfo.birthtime,
      modified: fileInfo.mtime
    }
  })
  return files
}
