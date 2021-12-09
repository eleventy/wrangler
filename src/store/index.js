import { createContext } from 'react'
import DriveStore from './DriveStore'
import UIStore from './UIStore'
import RecipeStore from './RecipeStore'

class Store {
  constructor () {
    this.ui = new UIStore(this)
    this.driveStore = new DriveStore(this)
    this.recipeStore = new RecipeStore(this)
  }
}

export const store = new Store()
export const Context = createContext({})
