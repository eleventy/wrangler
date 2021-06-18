import { makeAutoObservable } from "mobx"
import moment from 'moment'

class UIStore {

  constructor() {
    /** @type {settings} */
    this._settings = {
      pollingInterval: 2000
    }
    /** @type {projects} */
    this._projects = {}
    /** @type {date} */
    this._dateFolder = moment()
    makeAutoObservable(this)
    loadSettingsFromStorage(this)
  }

  // Setters
  setActiveProject(projectName) { 
    this._projects.activeProject = projectName
    window.api.settings_setSetting({ keyPath :'projects.activeProject', obj : projectName })
  }
  setProjects(projects) { this._projects = projects }
  setDateFolder(date) { this._dateFolder = date }
  
  // Getters
  get activeProject() { return this._projects?.activeProject ? this._projects.activeProject : 'chooseProject' }
  get settings() { return this._settings }
  get dateFolder() { return this._dateFolder.format('yyyy-MM-DD') }
  
}
export default UIStore

///////

const loadSettingsFromStorage = async self => {
  self._settings = await window.api.settings_getSettings('settings')
  const projects = await window.api.settings_getSettings('projects')
  self.setProjects(projects)
}


///////

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