import React,{ useContext } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'

const ActiveProject = observer( () => {
  const store = useContext(Context)
  const project = store.ui.activeProject
  const handleProjectChange = evt => {
    store.ui.setActiveProject(evt.target.value)
    store.driveStore.scanAllDrives()
  }

  return (
    <div>
      <Select value={project} onChange={handleProjectChange} variant='outlined' style={{ height: 35 }}>
        <MenuItem value={'chooseProject'}>Select Project</MenuItem>
        <MenuItem value={'Project 1'}>Project 1</MenuItem>
        <MenuItem value={'Project 2'}>Project 2</MenuItem>
      </Select>
    </div>
  )
})
export default ActiveProject

///////////////////
