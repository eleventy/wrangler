import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Context } from 'store'
import Loading from 'components/Loading'

const SourceDrive = ({ drive }) => {
  const classes = useStyles()
  const store = useContext(Context)

  useEffect( () => {
    // If it's an new source drive, scan it for possible clips
    if(!drive.status) {
      // store.driveStore.scanSourceDrive(drive)
    }
  }, [] )

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="default" className={classes.button}>
        <div>{drive.path}</div>
      </Button>
      {
        drive.status === 'ready'
        ?
          <div>
            <ul style={{paddingLeft: 20}}>
              <li>20 Clips</li>
              <li>120 GB</li>
            </ul>
          </div>
        :
          <Loading />
      }
    </Paper>
  )
}
SourceDrive.propTypes = {
  drive: PropTypes.object.isRequired
}
export default SourceDrive

///////

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
    padding: 5
  },
  button: {
    margin: 5
  },
}))