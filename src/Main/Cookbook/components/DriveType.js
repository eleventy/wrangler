import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'

const DriveType = ({ drive, updateDrive }) => {
  const handleChange = evt => { updateDrive({ field: 'type', value: evt.target.value }) }

  return (
    <div>
      <Typography variant='body1' display='block' color='textSecondary'>
        if PATH = {drive.path} then this is a
      </Typography>
      <FormControl component='fieldset'>
        <RadioGroup row aria-label='drive type' value={drive.type} onChange={handleChange}>
          <FormControlLabel value='hidden' control={<Radio />} label='Hidden / System' />
          <FormControlLabel value='source' control={<Radio />} label='Source Drive' />
          <FormControlLabel value='Destination' control={<Radio />} label='Destination Drive' />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
DriveType.propTypes = {
  drive: PropTypes.object.isRequired,
  updateDrive: PropTypes.func.isRequired

}
export default DriveType
