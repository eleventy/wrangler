import { createContext } from "react"
import DriveStore from './DriveStore.js'

class Store {
  secondsPassed = 5

  constructor() {
    this.driveStore = new DriveStore(this)
  }
}

export const store = new Store()
export const Context = createContext()