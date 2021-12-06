import { createContext } from 'react'
import DriveStore from './DriveStore'
import UIStore from './UIStore'

class Store {
  constructor () {
    this.ui = new UIStore(this)
    this.driveStore = new DriveStore(this)
  }
}

export const store = new Store()
export const Context = createContext({})
