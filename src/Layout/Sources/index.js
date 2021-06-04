import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { observer } from 'mobx-react-lite'
import { useContext } from "react"
import { Context } from '../../store'

const Sources = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)


  return (
    <Paper className={classes.paper}>
      Sources drives&nbsp;
    </Paper>
  )
})
export default Sources

const useStyles = makeStyles( theme => ({
  paper: {
    padding: 10,
    margin: 10,
    backgroundColor: theme.palette.background.default,
    borderWidth: 2,
    borderColor: theme.palette.secondary.main,
    borderStyle: 'solid'
  },
  hbox: {
    display:'flex'
  }
}))