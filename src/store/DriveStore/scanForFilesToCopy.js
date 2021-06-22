import path from 'path'

/*
  scan all drives for files not in one of the backup drives
*/
const scanForFilesToCopy = ({ driveStore }) => {
  driveStore._filesToCopy = []
  const filesToCopy = []
  if( drivesNotReady(driveStore) ) return filesToCopy

  driveStore.sourceDrives.forEach( sourceDrive => {
    sourceDrive.files.forEach( sourceFile => {
      driveStore.destinationDrives.forEach( destinationDrive => {
        
        destinationDrive.files.forEach( destFile => {
          if( !areFilesEqual({ sourceFile, destFile }) ){
            const destinationPath = path.join(
              destinationDrive.path,
              destinationDrive.rootFolder,
              driveStore._uiStore.activeProject,
              driveStore._uiStore.dateFolder,
              sourceDrive.label
            )
            filesToCopy.push({
              sourcePath: sourceFile.path,
              destinationPath,
              size: sourceFile.size
            })
            if( sourceFile.path === 'E:/PRIVATE/AVCHD/BDMV/STREAM/00010.MTS'){
              filesToCopy.push({
                sourcePath: sourceFile.path,
                destinationPath: 'F:/backup/Project 1/2021-06-22/Sony',
                size: sourceFile.size
              })

            }
          }
        })
      })
    })
  })
  driveStore._filesToCopy = filesToCopy
}

export default scanForFilesToCopy

////////////////////////

const drivesNotReady = driveStore => {
  // Wait until all drives have been scanned
  const todoSourceDrives = driveStore.sourceDrives.filter( drive => drive.status === 'ready' )
  const todoDestinationDrives = driveStore.destinationDrives.filter( drive => drive.status === 'ready' )
  return !todoSourceDrives.length || !todoDestinationDrives.length
}

const areFilesEqual = ({ sourceFile, destFile }) => {
  // double check that source and destination are equal
  // TODO check destinationPath
  if(destFile.size !== sourceFile.size ) return false
  if(path.basename(destFile.path) !== path.basename(sourceFile.path) ) return false
  if(destFile.modified.getTime() !== sourceFile.modified.getTime() ) return false
  return true
}
