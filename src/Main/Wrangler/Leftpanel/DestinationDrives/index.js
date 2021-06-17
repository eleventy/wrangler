import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { observer } from 'mobx-react-lite'
import { useContext } from "react"
import DestinationDrive from './DestinationDrive'
import { Context } from 'store'

const DestinationDrives = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)
  const destinationDrives = store.driveStore.destinationDrives

  return (
    <Paper className={classes.paper}>
      <Typography variant="caption" display="block" color='textSecondary'>
        Destination drives
      </Typography>
      <div className={classes.hbox}>
        { destinationDrives.map( drive => <DestinationDrive key={drive.path} drive={drive} /> ) }
      </div>
    </Paper>
  )
})
export default DestinationDrives

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