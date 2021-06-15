import { makeAutoObservable } from 'mobx'
import pollDrives from './pollDrives'
import updateDriveLists from './updateDriveLists'

class DriveStore {
  _drivelist = []
  _sourceDrives = []
  _destinationDrives = []

  constructor() {
    makeAutoObservable(this)
  }

  // Setters
  pollDrives() { pollDrives({ self: this }) }
  updateDriveLists(allDrives) { updateDriveLists({ self: this, allDrives }) }

  // Getters
  get driveList() { return this._drivelist }
  get unassignedDrives() { return this._drivelist.filter( d => d.type === 'unassigned' ) }
  get sourceDrives() { return this._sourceDrives }
  get destinationDrives() { return this._destinationDrives }
  
}
export default DriveStore