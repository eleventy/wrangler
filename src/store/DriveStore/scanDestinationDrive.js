import { toJS } from 'mobx'
import { runInAction } from "mobx"

/**
 *  scanDestinationDrive: Let the backend scan a drive for media files
 * @param {Object} args
 * @param {Object} args.self The DriveStore object
 * @param {Object} args.drive Drive object, containing the path 
 */
const scanDestinationDrive = async ({ self, drive }) => {
  // @ts-ignore
  const result = await window.api.drives_scanMediaDrive( toJS( drive) )
  if(result.error){
    console.log(result.error)
    // TODO Report to user
    return
  }
  const driveSpaceResult = await window.api.drives_getDriveSpace( drive.path )
  if(driveSpaceResult.error){
    console.log(driveSpaceResult.error)
    // TODO Report to user
    return
  }
  const indexOfDrive = self._destinationDrives.findIndex( d => d.path === drive.path )
  drive.files = result.files
  drive.space = driveSpaceResult.result
  drive.status = 'ready'
  runInAction( () =>{ self._destinationDrives.splice( indexOfDrive, 1, drive )} )
}
export default scanDestinationDrive