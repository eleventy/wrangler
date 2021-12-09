import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Context } from '../../../store'

const RecipeItem = ({ recipe }) => {
  const store = useContext(Context)
  const handleSetActiveRecipeId = () => {
    store.recipeStore.setActiveRecipeId(recipe.id)
  }
  return (
    <TableRow hover onClick={handleSetActiveRecipeId}>
      <TableCell>{recipe.setType.setBy} = {recipe.setType.value}</TableCell>
      <TableCell align='center'>{recipe.type}</TableCell>
      <TableCell align='center'>{recipe.active ? 'v' : 'x'}</TableCell>

    </TableRow>
  )
}
RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
}
export default RecipeItem
