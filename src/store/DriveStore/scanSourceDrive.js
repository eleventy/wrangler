import { toJS, runInAction } from 'mobx'

/**
 *  scanSourceDrive: Let the backend scan a drive for media files
 * @param {Object} args
 * @param {Object} args.self The DriveStore object
 * @param {Object} args.drive Drive object, containing the path
 */
const scanSourceDrive = async ({ driveStore, drive }) => {
  // @ts-ignore
  const result = await window.api.drives_scanMediaDrive(toJS(drive))
  if (result.error) {
    console.log(result.error)
    // TODO Report to user
    return
  }
  const indexOfDrive = driveStore._sourceDrives.findIndex(d => d.path === drive.path)
  drive.files = result.files
  drive.status = 'ready'
  runInAction(() => {
    driveStore._sourceDrives.splice(indexOfDrive, 1, drive)
    driveStore.scanForFilesToCopy()
  })
}
export default scanSourceDrive
