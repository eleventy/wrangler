import { makeAutoObservable } from "mobx"

class UIStore {

  _settings = {
    pollingInterval: 1000
  }

  _projects = {}


  constructor() {
    makeAutoObservable(this)
    loadSettingsFromStorage(this)
  }

  // Setters
  setActiveProject(projectName) { 
    this._projects.activeProject = projectName
    window.api.settings_setSetting({ keyPath :'projects.activeProject', obj : projectName })
  }
  setProjects(projects) { self._projects = projects }
  
  // Getters
  get activeProject() { return this._projects?.activeProject ? this._projects.activeProject : 'chooseProject' }
  get settings() { return this._settings }
  
}
export default UIStore

///////

const loadSettingsFromStorage = async self => {
  self._settings = await window.api.settings_getSettings('settings')
  const projects = await window.api.settings_getSettings('projects')
  self.setProjects(projects)
}