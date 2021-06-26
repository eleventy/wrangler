import { makeAutoObservable } from 'mobx'
import pollDrives from './pollDrives'
import updateDriveLists from './updateDriveLists'
import scanSourceDrive from './scanSourceDrive'
import scanDestinationDrive from './scanDestinationDrive'
import scanForFilesToCopy from './scanForFilesToCopy'
import startAnUpload from './startAnUpload'

class DriveStore {
  
  constructor(rootStore) {
    /** @type {unassignedDrives} */
    this._unassignedDrives = []
    /** @type {sourceDrives} */
    this._sourceDrives = [] 
    /** @type {destinationDrives} */
    this._destinationDrives = []
    /** @type {filesToCopy} */
    this._filesToCopy = []
    this._uiStore = rootStore.ui
    makeAutoObservable(this)
  }

  // Setters
  pollDrives() { pollDrives({ driveStore: this }) } // Scan system for new/removed drives and cards
  updateDriveLists(allDrives) { updateDriveLists({ driveStore: this, allDrives }) } // Update unassigned, source and dest drivelists
  scanSourceDrive(drive) { scanSourceDrive({ driveStore: this, drive }) }
  scanDestinationDrive(drive) { scanDestinationDrive({ driveStore: this, drive }) }
  scanForFilesToCopy() { scanForFilesToCopy({ driveStore: this })}
  startAnUpload() { startAnUpload({ driveStore: this }) }


  // Getters
  get unassignedDrives() { return this._unassignedDrives }
  get sourceDrives() { return this._sourceDrives }
  get destinationDrives() { return this._destinationDrives }
  get filesToCopy() { return this._filesToCopy }
  
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
 * @property {('new'|'ready'|'done')=} sourceDrives.status Status of the drive
 * @property {mediaFile[]=} sourceDrives.files Mediafiles on the drive
 */
/**
 * An array of destination drives to backup files to
 * @typedef {object[]} destinationDrives
 * @property {string} destinationDrives.path Pathname of the Drive 'E:/' (forward slashes)
 * @property {string} destinationDrives.type type of drive ('destination')
 * @property {array} destinationDrives.fileTypesToCopy extensions to copy ('mp4', 'mp3', ...)
 * @property {('new'|'ready')} destinationDrives.status status of the drive
 * @property {string} destinationDrives.rootFolder subfolder for backups
 * @property {object} destinationDrives.space used, free and total diskspace
 * @property {mediaFile[]=} destinationDrives.files Mediafiles on the drive
*/

/**
 * @typedef {object} mediaFile - A Media file object 
 * @property {string} mediaFile.path - Full path to the clip
 * @property {date} mediaFile.created - creation date
 * @property {date} mediaFile.modified - modification date
 * @property {number} mediaFile.size - filesize in bytes
 */

/**
 * @typedef {object[]} filesToCopy - List of file objects to backup 
 * @property {string} mediaFile.sourcePath - Full path to the clip, including filename
 * @property {string} mediaFile.destinationPath - Full path to the clip, without filename
 * @property {number} mediaFile.size - filesize in bytes
 * @property {('todo'|'done')} mediaFile.status - Status of this mediafile
 */