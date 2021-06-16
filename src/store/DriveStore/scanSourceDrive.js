import { toJS } from 'mobx'
import { runInAction } from "mobx"

/**
 *  scanSourceDrive: Let the backend scan a drive for media files
 * @param {Object} args
 * @param {Object} args.self The DriveStore object
 * @param {Object} args.drive Drive object, containing the path 
 */
const scanSourceDrive = async ({ self, drive }) => {
  // @ts-ignore
  const result = await window.api.drives_scanSourceDrive( toJS( drive) )
  if(result.error){
    console.log(result.error)
    // TODO Report to user
    return
  }
  const indexOfDrive = self._sourceDrives.findIndex( d => d.path === drive.path )
  drive.files = result.files
  drive.status = 'todo'
  runInAction( () =>{ self._sourceDrives.splice( indexOfDrive, 1, drive )} )
}
export default scanSourceDrive