import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import DriveCard from './DriveCard'
import { Context } from '../../../../store'

const UnassignedDrives = observer(() => {
  const classes = useStyles()
  const store = useContext(Context)
  const unassignedDrives = store.driveStore.unassignedDrives

  if (!unassignedDrives.length) return null

  return (
    <Paper className={classes.paper}>
      <Typography variant='caption' display='block' color='textSecondary'>
        Unassigned / Unknown drives:
      </Typography>
      <div className={classes.hbox}>
        {unassignedDrives.map(drive => <DriveCard key={drive.path} drive={drive} />)}
      </div>
      <Typography variant='caption' display='block' color='textSecondary'>
        Please go to the Cookbook page to assign functions to these drives
      </Typography>
    </Paper>
  )
})
export default UnassignedDrives

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
