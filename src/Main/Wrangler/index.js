import React, { useEffect, useContext } from 'react'
import UnassignedDrives from './Leftpanel/UnassignedDrives'
import SourceDrives from './Leftpanel/SourceDrives'
import DestinationDrives from './Leftpanel/DestinationDrives'
import DriveViewer from './Rightpanel/DriveViewer'
import ClipViewer from './Rightpanel/ClipViewer'
import Toppanel from './Toppanel'
import { Context } from '../../store'

const Main = () => {
  const store = useContext(Context)

  useEffect( () => {
    // Scan the system for new drives every X seconds
    const interval = setInterval( () => {
      console.log('polling...')
      store.driveStore.pollDrives()
    }, 2000 )
    return () => {
      clearInterval(interval)
    }
  }, [] )

  return (
    <div style={styles.root} >
      <Toppanel />
      <div style={styles.hbox}>
        <div style={styles.leftPanel}>
          <UnassignedDrives />
          <SourceDrives />
          <DestinationDrives />
        </div>
        <div style={styles.rightPanel}>
          <DriveViewer />
          <ClipViewer />
        </div>
      </div>
    </div>
  )
}
export default Main

///////

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    paddingTop: 50
  },
  hbox: {
    display: 'flex',
    justifyContent: 'column',
    height: '100vh',
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minWidth: 400
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  paper: {
    padding:40,
    margin: 10,
  }
}