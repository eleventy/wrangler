import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button'

const ActionPanel = () => {
  const classes = useStyles()
  const [ autoIngest, setAutoIngest ] = useState(false)

  const handleAutoIngest = () => { setAutoIngest( checked => !checked) }

  return (
    <Paper className={classes.paper}>
      <Button variant="contained" color="primary">
        Start Ingest
      </Button>
      <FormControlLabel
        control={<Switch checked={autoIngest} onChange={handleAutoIngest} name="autoIngest"  color="primary" />}
        label="Auto Ingest"
      />
    </Paper>
  )
}
export default ActionPanel

/////////////////

const useStyles = makeStyles( theme => ({
  paper: {
    padding: 10,
    margin: 10,
    backgroundColor: theme.palette.background.default,
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    display:'flex',
    justifyContent: 'space-around'
  },
}))