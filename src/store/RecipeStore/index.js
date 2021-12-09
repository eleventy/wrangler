import { makeAutoObservable } from 'mobx'

class RecipeStore {
  constructor () {
    this._recipes = getDefaultRecipes()
    this._activeRecipeId = '0'

    makeAutoObservable(this)
    // loadSettingsFromStorage(this)
  }

  // Setters
  setRecipes (recipes) { this._recipes = recipes }
  setActiveRecipeId (id) { this._activeRecipeId = id }
  getRecipe (id) { return this._recipes.find(recipe => recipe.id === id) }

  // Getters
  get recipes () { return this._recipes }
  get activeRecipeId () { return this._activeRecipeId }
  get activeRecipe () { return this._recipes.find(recipe => recipe.id === this._activeRecipeId) }
}
export default RecipeStore

///

// const loadSettingsFromStorage = async self => {
//   try {
//     console.log('loading recipes')
//     const recipes = await window.api.settings_getSettings('recipes')
//     console.log({ recipes })
//     self.setRecipes(recipes)
//   } catch (err) {
//     console.error(err)
//   }
// }

const getDefaultRecipes = () => {
  return [
    {
      setType: {
        setBy: 'path',
        value: 'c:\\'
      },
      type: 'hidden',
      active: true,
      id: '0'
    },
    {
      setType: {
        setBy: 'path',
        value: 'e:\\'
      },
      type: 'source',
      active: false,
      id: '1'
    },
    {
      setType: {
        setBy: 'label',
        value: 'MyCard*'
      },
      type: 'source',
      sourceProps: {
        label: 'SONY'
      },
      active: true,
      id: '2'
    }
  ]
}
