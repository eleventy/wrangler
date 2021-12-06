import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react-lite'

import DestinationDrive from './DestinationDrive'
import { Context } from 'store'

const DestinationDrives = observer(() => {
  const classes = useStyles()
  const store = useContext(Context)
  const destinationDrives = store.driveStore.destinationDrives

  return (
    <Paper className={classes.paper}>
      <Typography variant='caption' display='block' color='textSecondary'>
        Destination drives
      </Typography>
      <div className={classes.hbox}>
        {destinationDrives.map(drive => <DestinationDrive key={drive.path} drive={drive} />)}
      </div>
    </Paper>
  )
})
export default DestinationDrives

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 10,
    margin: 10,
    backgroundColor: theme.palette.background.default,
    borderWidth: 2,
    borderColor: theme.palette.secondary.main,
    borderStyle: 'solid'
  },
  hbox: {
    display: 'flex'
  }
}))
