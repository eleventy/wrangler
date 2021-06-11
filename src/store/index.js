import { createContext } from "react"
import DriveStore from './DriveStore'
import UIStore from './UIStore'

class Store {

  constructor() {
    this.driveStore = new DriveStore(this)
    this.ui = new UIStore(this)
  }
}

export const store = new Store()
export const Context = createContext()