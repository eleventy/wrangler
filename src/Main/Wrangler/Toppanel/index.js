import React from 'react'
import ActiveProject from './ActiveProject'
import Datepicker from './Datepicker'

const Toppanel = () => {

  return (
    <div style={styles.root}>
      <ActiveProject />
      &nbsp;/&nbsp;
      <Datepicker />
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