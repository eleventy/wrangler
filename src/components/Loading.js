import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
  return (
    <div style={styles.root}>
      <CircularProgress color='secondary' size={25} />
    </div>
  )
}
export default Loading

/// ////////

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
}
