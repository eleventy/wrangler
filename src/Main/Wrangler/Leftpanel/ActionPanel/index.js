import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import { Context } from 'store'
import { observer } from 'mobx-react-lite'
import InfoPanel from './InfoPanel'
import StatsPanel from './StatsPanel'

const ActionPanel = observer(() => {
  const classes = useStyles()
  const store = useContext(Context)
  const [autoIngest, setAutoIngest] = useState(false)

  const handleAutoIngest = () => { setAutoIngest(checked => !checked) }

  useEffect(() => {
    window.api.drives_getCopyProgress(data => {
      store.ui.setProgress(data.progress)
    })
  }, [])

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
        <Button variant='contained' color='primary' disabled={!readyToCopy} onClick={startWrangling}>
          Start Ingest
        </Button>
        <FormControlLabel
          control={<Switch checked={autoIngest} onChange={handleAutoIngest} name='autoIngest' color='primary' />}
          label='Auto Ingest'
        />
      </div>
      {readyToCopy && <StatsPanel />}
    </Paper>
  )
})
export default ActionPanel

/// //////////////

const useStyles = makeStyles(theme => ({
  root: {
    padding: 5,
    margin: 10,
    backgroundColor: theme.palette.background.default,
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid'

  },
  hbox: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}))
