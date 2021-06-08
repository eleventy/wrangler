import React from 'react'
import ActiveProject from './ActiveProject'

const Toppanel = () => {

  return (
    <div style={styles.root}>
      <ActiveProject />
    </div>
  )
}
export default Toppanel

//////////////

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}