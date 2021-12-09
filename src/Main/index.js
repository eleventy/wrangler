import React from 'react'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Wrangler from './Wrangler'
import ProjectManager from './ProjectManager'
import Cookbook from './Cookbook'
import Alert from './components/Alert'

const Main = () => {
  const [activeTab, setActiveTab] = React.useState(2)

  const handleTabs = (event, newValue) => { setActiveTab(newValue) }

  return (
    <div>
      <AppBar position='fixed'>
        <Tabs value={activeTab} onChange={handleTabs} centered>
          <Tab label='Wrangler' />
          <Tab label='Project manager' />
          <Tab label='Cookbook' />
        </Tabs>
      </AppBar>
      <Alert />

      {activeTab === 0 && <Wrangler />}
      {activeTab === 1 && <ProjectManager />}
      {activeTab === 2 && <Cookbook />}

    </div>
  )
}
export default Main
