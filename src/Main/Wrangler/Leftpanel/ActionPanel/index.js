import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import { Context } from 'store'
import { observer } from 'mobx-react-lite'
import InfoPanel from './InfoPanel'
import StatsPanel from './StatsPanel'
import Card from '../../../../components/Card'

const ActionPanel = observer(() => {
  const classes = useStyles()
  const store = useContext(Context)
  const [autoIngest, setAutoIngest] = useState(false)

  const handleAutoIngest = () => { setAutoIngest(checked => !checked) }

  useEffect(() => {
    try {
      window.api.drives_getCopyProgress(data => {
        store.ui.setProgress(data.progress)
      })
    } catch (err) {
      console.error(err)
    }
  }, [])

  const startWrangling = () => {
    store.ui.startWrangling()
    store.driveStore.startAnUpload()
  }

  const readyToCopy = store.ui.appState === 'readytorun' && !!store.driveStore.filesToCopyTodo.length

  return (
    <Card>
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
      <StatsPanel />
    </Card>
  )
})
export default ActionPanel

/// //////////////

const useStyles = makeStyles(theme => ({
  hbox: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}))
