import React from 'react'
import Paper from '@material-ui/core/Paper'
import Unassigned from './Unassigned'
import Sources from './Sources'
import Destinations from './Destinations'
import ClipViewer from './ClipViewer'

const Layout = () => {

  return (
    <div style={styles.root}>
      <div style={styles.leftPanel}>
        <Unassigned />
        <Sources />
        <Destinations />
      </div>
      <ClipViewer />
    </div>
  )
}
export default Layout

///////

const styles = {
  root: {
    display: 'flex',
    height: '100vh',
    paddingTop: 50
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minWidth: 400
  },
  rightPanel: {
    padding:50,
    margin: 10,
    flexGrow: 1,
  },
  paper: {
    padding:40,
    margin: 10,
  }
}