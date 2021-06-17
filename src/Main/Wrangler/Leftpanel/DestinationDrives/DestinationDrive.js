import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Context } from 'store'
import Loading from 'components/Loading'

const DestinationDrive = ({ drive }) => {
  const classes = useStyles()
  const store = useContext(Context)

  useEffect( () => {
    // If it's an new source drive, scan it for possible clips
    if(!drive.status) {
      // store.driveStore.scanDestinationDrive(drive)
    }
  }, [] )

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color='inherit' className={classes.button}>
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
        <div>
          <Typography	variant='caption'>Scanning ...</Typography>
          <Loading />
        </div>
      }
    </Paper>
  )
}
DestinationDrive.propTypes = {
  drive: PropTypes.object.isRequired
}
export default DestinationDrive

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