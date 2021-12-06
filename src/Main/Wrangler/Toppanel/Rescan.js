import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const Rescan = observer(() => {
  const store = useContext(Context)

  const rescan = () => { store.driveStore.scanAllDrives() }

  return (
    <Tooltip title='Rescan all drives'>
      <IconButton
        color='secondary'
        aria-label='Rescan drives'
        onClick={rescan}
        size='large'
      >
        <FontAwesomeIcon icon={faSync} size='xs' />
      </IconButton>
    </Tooltip>
  )
})
export default Rescan
