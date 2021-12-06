import _ from 'lodash'
import slash from 'slash'

const pollDrives = async ({ driveStore }) => {
  /*
    Scan the filesystem for all current drives. Apply all possible recipes to the drives to
    figure out what to do with them.
  */
  // @ts-ignore
  try {
    const rawList = await window.api.drives_getDriveList()
    const allDrives = parseRawList(rawList)

    driveStore.updateDriveLists(allDrives)
  } catch (err) {
    console.error(err)
  }
}
export default pollDrives

/// ///

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
  if (!rawlist || !rawlist.length) return allDrives
  rawlist.forEach(rawdrive => {
    if (!rawdrive.mountpoints || !rawdrive.mountpoints.length) { return }
    rawdrive.mountpoints.forEach(rawDrive => {
      const drive = {
        path: slash(rawDrive.path),
        type: 'unassigned',
        status: 'new'
      }
      runRecipes(drive)
      allDrives.push(drive)
    })
  })
  return _.sortBy(allDrives, ['path'])
}
/// //////////

const runRecipes = drive => {
  // TODO: temporary recipes
  if (drive.path === 'C:/') {
    drive.type = 'hidden'
  }
  if (drive.path === 'D:/') {
    drive.type = 'destination'
    drive.rootFolder = 'backup'
    drive.fileTypesToCopy = ['mp4', 'mts', 'mp3', 'wav']
  }
  if (drive.path === 'E:/') {
    drive.type = 'source'
    drive.label = 'Sony'
    drive.fileTypesToCopy = ['mp4', 'mts', 'mp3', 'wav']
  }
}
