import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { observer } from 'mobx-react-lite'
import { useContext } from "react"
import { Context } from '../../../../store'

const DriveViewer = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)

  return (
    <Paper className={classes.paper}>
      <Typography variant="caption" display="block" color='textSecondary'>
        DriveViewer
      </Typography>
    </Paper>
  )
})
export default DriveViewer

const useStyles = makeStyles( theme => ({
  paper: {
    minHeight: 150,
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