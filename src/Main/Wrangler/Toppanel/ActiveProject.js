import React,{ useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

const ActiveProject = () => {
  const [ project, setProject] = useState('chooseProject')

  const handleProjectChange = evt => {
    setProject(evt.target.value)
  }

  return (
    <div>
      <Typography variant="overline">
        Project:
      </Typography>
      <Select value={project} onChange={handleProjectChange}  style={{ paddingLeft: 8 }}>
        <MenuItem value={'chooseProject'}>Select Project</MenuItem>
        <MenuItem value={'Project 1'}>Project 1</MenuItem>
        <MenuItem value={'Project 2'}>Project 2</MenuItem>
      </Select>
    </div>
  )
}
export default ActiveProject

///////////////////
