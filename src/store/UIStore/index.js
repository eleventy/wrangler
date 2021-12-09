import { makeAutoObservable } from 'mobx'
import moment from 'moment'

class UIStore {
  constructor () {
    /** @type {settings} */
    this._settings = {
      pollingInterval: 2000
    }

    /** @type {projects} */
    this._projects = {}

    /** @type {date} */
    this._dateFolder = moment()

    /** @type {appState} */
    this._appState = 'notready' // notready, readytorun

    /** @type {alertState} */
    this._alertState = { open: false, message: '', severity: 'warning' }

    /** @type {currentProgress} */
    this._currentProgress = {}

    /** @type {previousProgress} */
    this._previousProgress = {}

    makeAutoObservable(this)
    loadSettingsFromStorage(this)
  }

  // Setters
  setActiveProject (projectName) {
    this._projects.activeProject = projectName
    window.api.settings_setSetting({ keyPath: 'projects.activeProject', obj: projectName })
  }

  setProjects (projects) { this._projects = projects }
  setDateFolder (date) { this._dateFolder = date }
  startWrangling () { this._appState = 'running' }
  setAppState (state) { this._appState = state }
  setAlertState (state) { this._alertState = { ...this._alertState, ...state } }
  setProgress (progress) { this._previousProgress = this._currentProgress; this._currentProgress = progress }

  // Getters
  get activeProject () { return this._projects?.activeProject ? this._projects.activeProject : 'chooseProject' }
  get settings () { return this._settings }
  get dateFolder () { return this._dateFolder.format('yyyy-MM-DD') }
  get appState () { return this._appState }
  get alertState () { return this._alertState }
  get currentProgress () { return this._currentProgress }
  get previousProgress () { return this._previousProgress }
}
export default UIStore

/// ////

const loadSettingsFromStorage = async self => {
  try {
    self._settings = await window.api.settings_getSettings('settings')
    const projects = await window.api.settings_getSettings('projects')
    self.setProjects(projects)
  } catch (err) {
    console.error(err)
  }
}

/// ////

/**
 * @typedef {object} settings
 * @property {number} settings.pollingInterval How often to scan for drivechanges
 */

/**
 * @typedef {object} projects
 * @property {string=} projects.activeProject Currently active project
 */

/**
 * @typedef {object} date Date-folder
 */

/**
 * @typedef {('standby'|'running'|'done')} appState state of the app
 */

/**
 * @typedef {object} alertState
 * @property {Boolean} alertState.open Is the alert open?
 * @property {String} alertState.message Text to display
 * @property {('success', 'info', 'warning', 'error')} alertState.severity How important is the message
 */
