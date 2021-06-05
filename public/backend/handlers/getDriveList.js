const drivelist = require('drivelist')

const getDriveList = async () => {
  try{
    console.log('getDriveList')
    const drives = await drivelist.list()
    console.log(drives.length)
    return drives
  }
  catch(err){
    console.error(err)
  }
}
module.exports = getDriveList