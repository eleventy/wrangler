import _ from "lodash"

const pollDrives = async ({ self }) => {
  /*
    Scan the filesystem for all current drives. Apply all possible recipes to the drives to
    figure out what to do with them.
  */
  const rawList = await window.api.getDriveList()
  const allDrives = parseRawList(rawList)

  self.updateDriveLists(allDrives)
}
export default pollDrives

//////

const parseRawList = rawlist => {
  /* 
    We have a raw list of physical drives with possible multiple logical drives.
    Turn them into a usefull array of drive Objects.
    [{
      path: 'C:\',
      type: hidden || source || destination,
    }]
  */
  const allDrives = []
  if(!rawlist || !rawlist.length) return allDrives
  rawlist.forEach( rawdrive => {
    if(!rawdrive.mountpoints || !rawdrive.mountpoints.length) { return }
    rawdrive.mountpoints.forEach( rawDrive => {
      const drive = {
        path: rawDrive.path,
        type: 'unassigned',
        status: 'loading'
      }
      runRecipes(drive)
      allDrives.push(drive)
    })
  })
  return _.sortBy(allDrives, ["path"])
}
7/////////////

const runRecipes = drive => {
  if (drive.path === 'C:\\') { drive.type = 'hidden' }
  if (drive.path === 'D:\\') { drive.type = 'destination' }
  if (drive.path === 'E:\\') { 
    drive.type = 'source'
    drive.fileTypesToCopy = [ 'mp4', 'mts', 'mp3', 'wav' ]
  }
}
