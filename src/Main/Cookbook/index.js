import React from 'react'
import UnassignedDrives from './UnassignedDrives/index'
import RecipeList from './RecipeList'
import SetRecipe from './SetRecipe'

const Cookbook = () => {
  return (
    <div style={styles.root}>
      <UnassignedDrives />
      <RecipeList />
      <SetRecipe />
    </div>
  )
}
export default Cookbook

/// //////////

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    paddingTop: 50
  }
}
