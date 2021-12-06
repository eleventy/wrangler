import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { Context } from 'store'
import Loading from 'components/Loading'
import filesize from 'filesize'

const SourceDrive = ({ drive }) => {
  const classes = useStyles()
  const store = useContext(Context)

  useEffect(() => {
    // If it's an new source drive, scan it for possible clips
    if (drive.status === 'new') {
      store.driveStore.scanSourceDrive(drive)
    }
  }, [drive])

  return (
    <Paper className={classes.root}>
      <Typography variant='button' align='center'>{drive.label}</Typography>
      <div className={classes.hbox}>
        <Button variant='outlined' color='inherit' className={classes.button}>
          <div>{drive.path}</div>
        </Button>
        {
          drive.status !== 'new'
            ? (
              <div style={{ paddingLeft: 20 }}>
                <Typography variant='caption' display='block' color='textSecondary'>{drive.files.length} Clips</Typography>
                <Typography variant='caption' display='block' color='textSecondary'>{getTotalFileSize(drive.files)}</Typography>

              </div>
              )
            : (
              <div>
                <Typography variant='caption'>Scanning ...</Typography>
                <Loading />
              </div>
              )
        }
      </div>
    </Paper>
  )
}
SourceDrive.propTypes = {
  drive: PropTypes.object.isRequired
}
export default SourceDrive

/// ////

const useStyles = makeStyles(theme => ({
  root: {
    padding: 8
  },
  hbox: {
    display: 'flex'
  },
  button: {
    // margin: 5
  }
}))

// Calculate total filesize and make it human readable (MB, GB,...)
const getTotalFileSize = files => filesize(files.reduce((acc, cur) => acc + cur.size, 0))
