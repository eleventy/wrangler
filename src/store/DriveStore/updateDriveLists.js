
const updateDrivesLists = ({ driveStore, allDrives }) => {
  /*
    After each system-scan for drives, check which drives are new, and which have disappeared
    Add them to the correct caterory ( source, destination, hidden, unassigned )
  */
  const unassignedDrives = allDrives.filter( d => d.type === 'unassigned' )
  updateUnassignedDrives({ driveStore, unassignedDrives })
  const sourceDrives = allDrives.filter( d => d.type === 'source' )
  updateSourceDrives({ driveStore, sourceDrives })
  const destinationDrives = allDrives.filter( d => d.type === 'destination' )
  updateDestinationDrives({ driveStore, destinationDrives })
}
export default updateDrivesLists

//////////////////

const updateUnassignedDrives = ({ driveStore, unassignedDrives }) => {
  const newDrives = unassignedDrives.filter( drive => !driveStore.unassignedDrives.some( s => s.path === drive.path ) )
  const removedDrives = driveStore.unassignedDrives.filter( drive => !unassignedDrives.some( s => s.path === drive.path ) )
  if(removedDrives.length){
    removedDrives.forEach( removedDrive => {
      driveStore._unassignedDrives.splice( driveStore._unassignedDrives.findIndex( d => d.path === removedDrive.path ), 1 )
    })
  }
  if(newDrives.length){
    driveStore._unassignedDrives.push( ...newDrives )
  }
}

//////////////////

const updateSourceDrives = ({ driveStore, sourceDrives }) => {
  const newDrives = sourceDrives.filter( drive => !driveStore.sourceDrives.some( s => s.path === drive.path ) )
  const removedDrives = driveStore.sourceDrives.filter( drive => !sourceDrives.some( s => s.path === drive.path ) )
  if(removedDrives.length){
    removedDrives.forEach( removedDrive => {
      driveStore._sourceDrives.splice( driveStore._sourceDrives.findIndex( d => d.path === removedDrive.path ), 1 )
    })
    driveStore.scanForFilesToCopy()
  }
  if(newDrives.length){
    driveStore._sourceDrives.push( ...newDrives )
  }
}
//////////////////

const updateDestinationDrives = ({ driveStore, destinationDrives }) => {

  const newDrives = destinationDrives.filter( drive => !driveStore.destinationDrives.some( s => s.path === drive.path ) )
  const removedDrives = driveStore.destinationDrives.filter( drive => !destinationDrives.some( s => s.path === drive.path ) )
  if(removedDrives.length){
    removedDrives.forEach( removedDrive => {
      driveStore._destinationDrives.splice( driveStore._destinationDrives.findIndex( d => d.path === removedDrive.path ), 1 )
    })
  }
  if(newDrives.length){
    driveStore._destinationDrives.push( ...newDrives )
  }
}