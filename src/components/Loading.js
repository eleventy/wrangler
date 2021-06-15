import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => {

  return (
    <div style={styles.root}>
      <CircularProgress color="secondary" size={25} />
    </div>
  )
}
export default Loading

///////////

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 5
  }
}