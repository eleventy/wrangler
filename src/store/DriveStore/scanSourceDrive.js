import { toJS } from 'mobx'

/**
 *  Let the backend scan a drive for media files
 * @param {Object} args
 * @param {Object} args.self The DriveStore object
 * @param {Object} args.drive Drive object, containing the path 
 */
const scanSourceDrive = async ({ self, drive }) => {
  console.log(drive.path)
  // @ts-ignore
  const result = await window.api.drives_scanSourceDrive( toJS( drive) )
  if(result.error){
    console.log(result.error)
    // TODO Report to user
    return
  }
  console.log(result.files, drive)
}
export default scanSourceDrive