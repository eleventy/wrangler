import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'
import Typography from '@material-ui/core/Typography'
import DriveOverview from './DriveOverview'

const InfoPanel = observer ( () => {
  const store = useContext(Context)
  const filesToCopy = splitFilesByDestination( store.driveStore.filesToCopy )
  const destinationList = []
  for (const key in filesToCopy) {
    destinationList.push({ drive: key, files: filesToCopy[key] })
  }
  return (
    <div>
      <Typography variant='caption' display='block' color='textSecondary'>
        Files to backup:
      </Typography>
      {destinationList.map( drive => <DriveOverview drive={drive.drive} files={drive.files} key={drive.drive} /> ) }
    </div>
  )
})
export default InfoPanel

//////////////

const splitFilesByDestination = unSortedFilesToCopy => {
  // Create a separate array per destination for all files
  const filesToCopy = unSortedFilesToCopy.reduce((obj, value) => {
    const key = value.destinationPath
    if (obj[key] == null) obj[key] = []
    obj[key].push(value)
    return obj
  }, {})
  return filesToCopy
}