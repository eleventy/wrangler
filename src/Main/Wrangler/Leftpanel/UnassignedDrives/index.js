import React,{ useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import DriveCard from './DriveCard'
import { Context } from '../../../../store'


const UnassignedDrives = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)
  const unassignedDrives = store.driveStore.unassignedDrives

  return (
    <Paper className={classes.paper}>
      <Typography variant="caption" display="block" color='textSecondary'>
        Unassigned
      </Typography>
      <div className={classes.hbox}>
        { unassignedDrives.map( drive => <DriveCard key={drive.path} drive={drive} /> ) }
      </div>
    </Paper>
  )
})
export default UnassignedDrives

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