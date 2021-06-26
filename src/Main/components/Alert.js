import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/core/Alert'

const Alert = observer ( () => {
  const store = useContext(Context)
  const alertState = store.ui.alertState

  const handleClose = () => { store.ui.setAlertState({ open: false })  }

  return (
    <Snackbar
      open={alertState.open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6000}
    >
      <MuiAlert onClose={handleClose} severity={alertState.severity}> 
        {alertState.message}
      </MuiAlert>
    </Snackbar>
  )
})
export default Alert