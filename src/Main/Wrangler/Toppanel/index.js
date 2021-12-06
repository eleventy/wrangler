import React from 'react'
import ActiveProject from './ActiveProject'
import Datepicker from './Datepicker'
import Rescan from './Rescan'

const Toppanel = () => {

  return (
    <div style={styles.root}>
      <ActiveProject />
      <Datepicker />
      <Rescan />
    </div>
  )
}
export default Toppanel

//////////////

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 5
  }
}