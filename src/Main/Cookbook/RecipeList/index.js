import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Card from '../../../components/Card'
import Typography from '@mui/material/Typography'
import { Context } from '../../../store'
import RecipeItem from './RecipeItem'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const RecipeList = observer(() => {
  const store = useContext(Context)
  const recipes = store.recipeStore.recipes

  return (
    <Card color='secondary'>
      <Typography align='center' color='primary'>
        Recipes
      </Typography>
      <TableContainer component={Paper}>
        <Table size='small' aria-label='Recipe list'>
          <TableHead>
            <TableRow>
              <TableCell>Filter</TableCell>
              <TableCell align='center'>Drive Type</TableCell>
              <TableCell align='center'>Active</TableCell>
            </TableRow>
            {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}
          </TableHead>
          <TableBody />
        </Table>
      </TableContainer>
    </Card>
  )
})
export default RecipeList
