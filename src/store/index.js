import { createContext } from "react"
import DriveStore from './DriveStore'
import UIStore from './UIStore'

class Store {

  constructor() {
    this.driveStore = new DriveStore()
    this.ui = new UIStore()
  }
}

export const store = new Store()
export const Context = createContext({})