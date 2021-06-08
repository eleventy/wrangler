const drivelist = require('drivelist')

const getDriveList = async () => {
  try{
    const drives = await drivelist.list()
    return drives
  }
  catch(err){
    console.error(err)
  }
}
module.exports = getDriveList