import { makeAutoObservable, runInAction } from "mobx"
import pollDrives from './pollDrives'

class DriveStore {
  _drivelist = []

  constructor() {
    makeAutoObservable(this)
  }

  pollDrives() { pollDrives({ self: this }) }

  
  // Getters

  get driveList() { return this._drivelist }
}
export default DriveStore