import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const ALERT_TIMEOUT = 8000

const Alert = observer(() => {
  const store = useContext(Context)
  const alertState = store.ui.alertState

  const handleClose = () => { store.ui.setAlertState({ open: false }) }

  return (
    <Snackbar
      open={alertState.open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={alertState.severity === 'error' ? null : ALERT_TIMEOUT}
    >
      <MuiAlert onClose={handleClose} severity={alertState.severity}>
        {alertState.message}
      </MuiAlert>
    </Snackbar>
  )
})
export default Alert
