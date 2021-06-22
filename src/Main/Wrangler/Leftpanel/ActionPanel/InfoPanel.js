import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'
import Typography from '@material-ui/core/Typography'
import filesize from 'filesize'

const InfoPanel = observer ( () => {
  const store = useContext(Context)
  const filesToCopy = splitFilesByDestination( store.driveStore.filesToCopy )
  const destinationList = []
  for (const key in filesToCopy) {
    destinationList.push( getDestinationDriveOverview({drive: key, files: filesToCopy[key] }))
  }
  return (
    <div  style={{ padding: 5 }} >
      <Typography variant='caption' display='block' color='textSecondary'>
        Files to backup:
      </Typography>
      {destinationList}
    </div>
  )
})
export default InfoPanel


///////////

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

const getDestinationDriveOverview = ({drive, files}) => {
  return (
    <Typography variant='caption' display='block' color='textSecondary' key={drive} >
      &nbsp;&nbsp;{drive} : { filesInfo(files) }
    </Typography>
  )
}

const filesInfo = files => {
  return `${files.length} clips | ${filesize( files.reduce( (acc, cur) => acc + cur.size, 0 ))} GB `
}