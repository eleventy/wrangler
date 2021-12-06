import React, { useContext } from 'react'
import AdapterMoment from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField'
import { Context } from 'store'
import { observer } from 'mobx-react-lite'

const Datepicker = observer(() => {
  const store = useContext(Context)
  const setDateFolder = newDate => { store.ui.setDateFolder(newDate) }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} style={{ height: 30 }}>
      <DatePicker
        value={store.ui.dateFolder}
        inputFormat='yyyy-MM-DD'
        mask='____-__-__'
        onChange={setDateFolder}
        renderInput={(params) => <TextField {...params} helperText={null} size='small' variant='standard' />}
      />
    </LocalizationProvider>
  )
})
export default Datepicker
