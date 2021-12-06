import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import { Context } from 'store'
import { observer } from 'mobx-react-lite'
import InfoPanel from './InfoPanel'
import StatsPanel from './StatsPanel'

const ActionPanel = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)
  const [ autoIngest, setAutoIngest ] = useState(false)

  const handleAutoIngest = () => { setAutoIngest( checked => !checked) }

  useEffect( () => {
    window.api.drives_getCopyProgress( data => {
      store.ui.setProgress(data.progress)
    })
  },[] )

  const startWrangling = () => { 
    store.ui.startWrangling()
    store.driveStore.startAnUpload()
  }

  const readyToCopy = store.ui.appState === 'standby' && !!store.driveStore.filesToCopyTodo.length
  console.log(store.ui.appState === 'standby', store.driveStore.filesToCopyTodo.length, readyToCopy)

  return (
    <Paper className={classes.root}>
      <InfoPanel />
      <div className={classes.hbox}>
        <Button variant="contained" color="primary" disabled={ !readyToCopy } onClick={startWrangling}>
          Start Ingest
        </Button>
        <FormControlLabel
          control={<Switch checked={autoIngest} onChange={handleAutoIngest} name="autoIngest"  color="primary" />}
          label="Auto Ingest"
        />
      </div>
      { readyToCopy && <StatsPanel />}
    </Paper>
  )
})
export default ActionPanel

/////////////////

const useStyles = makeStyles( theme => ({
  root: {
    padding: 5,
    margin: 10,
    backgroundColor: theme.palette.background.default,
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',

  },
  hbox: {
    display:'flex',
    justifyContent: 'space-around'
  },
}))