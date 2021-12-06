import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import SourceDrive from './SourceDrive'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'

const SourceDrives = observer(() => {
  const classes = useStyles()
  const store = useContext(Context)
  const sourceDrives = store.driveStore.sourceDrives

  return (
    <Paper className={classes.paper}>
      <Typography variant='caption' display='block' color='textSecondary'>
        Source drives
      </Typography>
      <div className={classes.hbox}>
        {sourceDrives.map(drive => <SourceDrive key={drive.path} drive={drive} />)}
      </div>
    </Paper>
  )
})
export default SourceDrives

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
