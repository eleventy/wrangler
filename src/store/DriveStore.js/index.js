import { makeAutoObservable, toJS } from "mobx"
import pollDrives from './pollDrives'

class DriveStore {
  _drivelist = []

  constructor() {
    makeAutoObservable(this)
  }

  pollDrives() { pollDrives({ self: this }) }

  
  // Getters
  get driveList() { return this._drivelist }
  get unassignedDrives() { return this._drivelist.filter( d => d.type === 'unassigned' ) }
  get sourceDrives() { return this._drivelist.filter( d => d.type === 'source' ) }
  get destinationDrives() { return this._drivelist.filter( d => d.type === 'destination' ) }
  
}
export default DriveStore