import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { observer } from 'mobx-react-lite'
import { useContext } from "react"
import { Context } from '../../store'
import DriveCard from './DriveCard'

const Unassigned = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)
  const driveList = store.driveStore.driveList

  useEffect( () => {
    store.driveStore.pollDrives()
  }, [] )

  return (
    <Paper className={classes.paper}>
      Unassigned drives&nbsp;
      <div className={classes.hbox}>
        { driveList.map( drive => <DriveCard key={drive.path} drive={drive} /> ) }
      </div>
    </Paper>
  )
})
export default Unassigned

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