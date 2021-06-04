const drivelist = require('drivelist')

const getDriveList = async () => {
  const drives = await drivelist.list()
  return drives
}
module.exports = getDriveList