
const updateDrivesLists = ({ self, allDrives }) => {
  /*
    After each system-scan for drives, check which drives are new, and which have disappeared
    Add them to the correct caterory ( source, destination, hidden, unassigned )
  */
  const sourceDrives = allDrives.filter( d => d.type === 'source' )
  updateSourceDrives({ self, sourceDrives })
  const destinationDrives = allDrives.filter( d => d.type === 'destination' )
  updateDestinationDrives({ self, destinationDrives })
}
export default updateDrivesLists

//////////////////

const updateSourceDrives = ({ self, sourceDrives }) => {
  const newDrives = sourceDrives.filter( drive => !self.sourceDrives.some( s => s.path === drive.path ) )
  const removedDrives = self.sourceDrives.filter( drive => !sourceDrives.some( s => s.path === drive.path ) )
  if(removedDrives.length){
    removedDrives.forEach( removedDrive => {
      self._sourceDrives.splice( self._sourceDrives.findIndex( d => d.path === removedDrive.path ), 1 )
    })
  }
  if(newDrives.length){
    self._sourceDrives.push( ...newDrives )
  }
}
//////////////////

const updateDestinationDrives = ({ self, destinationDrives }) => {

  const newDrives = destinationDrives.filter( drive => !self.destinationDrives.some( s => s.path === drive.path ) )
  const removedDrives = self.destinationDrives.filter( drive => !destinationDrives.some( s => s.path === drive.path ) )
  if(removedDrives.length){
    removedDrives.forEach( removedDrive => {
      self._destinationDrives.splice( self._destinationDrives.findIndex( d => d.path === removedDrive.path ), 1 )
    })
  }
  if(newDrives.length){
    self._destinationDrives.push( ...newDrives )
  }
}