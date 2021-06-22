import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { Context } from 'store'
import Loading from 'components/Loading'
import Capacity from './components/Capacity'

const DestinationDrive = ({ drive }) => {
  const classes = useStyles()
  const store = useContext(Context)

  useEffect( () => {
    // If it's an new destinations drive, scan it for possible clips
    if(drive.status === 'new') {
      store.driveStore.scanDestinationDrive(drive)
    }
  }, [drive] )

  return (
    <Paper className={classes.root}>
      <Typography	variant='button' align='center'>{drive.label}</Typography>
      <div className={classes.hbox}>
        <Button variant="outlined" color='inherit' className={classes.button}>
          <div>{drive.path}</div>
        </Button>
        {
          drive.status !== 'new'
          ?
          <div style={{paddingLeft: 20}}>
            <Typography	variant='caption' display='block' color='textSecondary' >{drive.files.length} Clips</Typography>
            
          </div>
          :
            <div>
              <Typography	variant='caption'>&nbsp;Scanning ...</Typography>
              <Loading />
            </div>
        }
      </div>
      <Capacity drive={drive} />
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
    padding: 8
  },
  hbox: {
    display: 'flex',
  },
  button: {
    // margin: 5
  },
}))
