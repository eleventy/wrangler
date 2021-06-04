import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { observer } from 'mobx-react-lite'
import { useContext } from "react"
import { Context } from '../../store'

const Clipviewer = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)

  return (
    <Paper className={classes.paper}>
      Clipviewer
    </Paper>
  )
})
export default Clipviewer

const useStyles = makeStyles( theme => ({
  paper: {
    flexGrow: 1,
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