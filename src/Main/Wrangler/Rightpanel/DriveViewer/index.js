import React from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react-lite'

const DriveViewer = observer(() => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography variant='caption' display='block' color='textSecondary'>
        DriveViewer
      </Typography>
    </Paper>
  )
})
export default DriveViewer

const useStyles = makeStyles(theme => ({
  paper: {
    minHeight: 150,
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
