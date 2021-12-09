import React, { useState, useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '../../../components/Card'
import { Context } from '../../../store'

const SetRecipe = observer(() => {
  const [recipe, setRecipe] = useState()
  const [modified, setModified] = useState(false)
  const store = useContext(Context)
  const activeRecipeId = store.recipeStore.activeRecipeId

  useEffect(() => {
    setRecipe(store.recipeStore.activeRecipe)
    setModified(false)
  }, [activeRecipeId])

  const updateDrive = ({ field, value }) => {
    // const updatedDrive = { ...drive }
    // updatedDrive[field] = value
    // setDrive(updatedDrive)
    // setModified(true)
  }

  const saveDrive = () => {}

  if (!recipe) return null
  return (
    <Card style='secondary'>
      <Typography variant='h6' display='block' color='textSecondary' align='center'>
        Recipe: {recipe.id}
      </Typography>
      <div styles={styles.hbox}>
        {/* <DriveType drive={drive} updateDrive={updateDrive} /> */}
      </div>
      <Button variant='contained' color='primary' disabled={!modified} onClick={saveDrive}>
        Save
      </Button>
    </Card>
  )
})

export default SetRecipe

///

const styles = {
  hbox: {
    display: 'flex'
  }
}
