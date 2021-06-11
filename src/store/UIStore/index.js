import { makeAutoObservable } from "mobx"

class UIStore {

  _activeProject = {
    projectName: 'chooseProject'
  }
  _settings = {}

  constructor() {
    makeAutoObservable(this)
    loadSettingsFromStorage(this)
  }

  // Setters
  setActiveProject(projectName) { this._activeProject.projectName = projectName }
  
  // Getters
  get activeProject() { return this._activeProject.projectName }
  get settings() { return this._settings }
  
}
export default UIStore

///////

const loadSettingsFromStorage = async self => {
  const settings = await window.api.settings_getSettings('settings')
  self._settings = settings
}