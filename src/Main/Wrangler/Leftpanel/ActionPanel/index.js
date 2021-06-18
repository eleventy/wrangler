import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import { Context } from 'store'
import { observer } from 'mobx-react-lite'

const ActionPanel = observer( () => {
  const classes = useStyles()
  const store = useContext(Context)
  const [ autoIngest, setAutoIngest ] = useState(false)

  const handleAutoIngest = () => { setAutoIngest( checked => !checked) }

  const ingestFolder = `Ingesting to / ${store.ui.activeProject} / ${store.ui.dateFolder} / card label / card #`
  return (
    <Paper className={classes.root}>
      <div className={classes.hbox}>
      <Button variant="contained" color="primary">
        Start Ingest
      </Button>
      <FormControlLabel
        control={<Switch checked={autoIngest} onChange={handleAutoIngest} name="autoIngest"  color="primary" />}
        label="Auto Ingest"
        />
      </div>
      <Typography	variant='caption' display='block' color='textSecondary' >
        {ingestFolder}
      </Typography>
    </Paper>
  )
})
export default ActionPanel

/////////////////

const useStyles = makeStyles( theme => ({
  root: {
    padding: 10,
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