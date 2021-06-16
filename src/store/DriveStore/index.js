import { makeAutoObservable } from 'mobx'
import pollDrives from './pollDrives'
import updateDriveLists from './updateDriveLists'
import scanSourceDrive from './scanSourceDrive'

class DriveStore {
  
  constructor() {
    /** @type {unassignedDrives} */
    this._unassignedDrives = []
    /** @type {sourceDrives} */
    this._sourceDrives = [] 
    /** @type {destinationDrives} */
    this._destinationDrives = []
    makeAutoObservable(this)
  }

  // Setters
  pollDrives() { pollDrives({ self: this }) } // Scan system for new/removed drives and cards
  updateDriveLists(allDrives) { updateDriveLists({ self: this, allDrives }) } // Update unassigned, source and dest drivelists
  scanSourceDrive(drive) { scanSourceDrive({ self: this, drive }) }


  // Getters
  get unassignedDrives() { return this._unassignedDrives }
  get sourceDrives() { return this._sourceDrives }
  get destinationDrives() { return this._destinationDrives }
  
}
export default DriveStore




//////////////////////////

/**
 * Drives that have yet to be evaluated, or no recipe could be found
 * @typedef {object[]} unassignedDrives
 * @property {string=} unassignedDrives.path Pathname of the Drive 'E:/' (forward slashes)
*/

/**
 * An array of drives containing source clips
 * @typedef {object[]} sourceDrives
 * @property {string=} sourceDrives.path Pathname of the Drive 'E:/' (forward slashes)
 * @property {string=} sourceDrives.label Label of the recipe
 * @property {('new'|'todo'|'done')=} sourceDrives.status Status of the drive
 * @property {mediaFile[]=} sourceDrives.files Mediafiles on the drive
*/
/**
 * An array of destination drives to backup files to
 * @typedef {object[]} destinationDrives
 * @property {string=} destinationDrives.path Pathname of the Drive 'E:/' (forward slashes)
*/

/**
 * @typedef {object} mediaFile - A Media file object 
 * @property {string} mediaFile.path - Path to the clip
 */