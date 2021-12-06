import React from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import filesize from 'filesize'

const Capacity = ({ drive }) => {
  if (!drive.space) return null

  return (
    <div style={styles.root}>
      <Typography variant='caption' display='block' color='textSecondary'>Capacity: {filesize(drive.space.total)}</Typography>
      <Typography variant='caption' display='block' color='textSecondary'>Free: {filesize(drive.space.free)}</Typography>
      <LinearProgress variant='determinate' value={getCapacity(drive.space)} style={styles.progress} color='secondary' />
    </div>
  )
}
Capacity.propTypes = {
  drive: PropTypes.object.isRequired
}
export default Capacity

/// /////////

const styles = {
  root: {
    paddingTop: 5
  },
  progress: {
    height: 10
  }
}

/// ////

const getCapacity = space => space.free * 100 / space.total
