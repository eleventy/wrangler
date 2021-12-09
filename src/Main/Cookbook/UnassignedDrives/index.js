import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Card from '../../../components/Card'
import Typography from '@mui/material/Typography'
import DriveCard from './DriveCard'
import { Context } from '../../../store'

const UnassignedDrives = observer(() => {
  const store = useContext(Context)

  return (
    <Card color='secondary'>
      <Typography variant='caption' display='block' color='textSecondary'>
        Unassigned Drives:
      </Typography>
      <div styles={styles.hbox}>
        {store.driveStore.unassignedDrives.map(
          drive => <DriveCard key={drive.path} drive={drive} />
        )}
      </div>
    </Card>
  )
})
export default UnassignedDrives

///

const styles = {
  hbox: {
    display: 'flex'
  }
}
