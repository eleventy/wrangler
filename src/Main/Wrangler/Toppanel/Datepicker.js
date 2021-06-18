import React, { useContext } from 'react'
import AdapterMoment from '@material-ui/lab/AdapterMoment'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import DatePicker from '@material-ui/lab/DatePicker'
import TextField from '@material-ui/core/TextField'
import { Context } from 'store'
import { observer } from 'mobx-react-lite'

const Datepicker = observer( () => {
  const store = useContext(Context)
  const setDateFolder = newDate => { store.ui.setDateFolder(newDate) }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} >
      <DatePicker
        value={store.ui.dateFolder}
        inputFormat='yyyy-MM-DD'
        mask='____-__-__'
        onChange={ setDateFolder }
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  )
})
export default Datepicker