const { ipcMain } = require('electron')
const diskspace = require('diskspace')

ipcMain.handle('drives_getDriveSpace', async (evt, path) => {
  /*
    Get used, free and total diskspace
  */
  try{
    console.log(path)
    const result = await asyncDiskspace(path)
    console.log({result})
    return { error: undefined, result }
  }
  catch(error){
    console.error(error)
    return { error, result: undefined }
  }
})

///////////////

const asyncDiskspace = path => {
  return new Promise( (resolve,reject) => {
    diskspace.check(path, (error, result) => {
      if(error) reject(error)
      resolve(result)
    })

  })
}
