import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Wrangler from './Wrangler'
import ProjectManager from './ProjectManager'
import Cookbook from './Cookbook'

const Main = () => {

  const [activeTab, setActiveTab] = React.useState(0)

  const handleTabs = (event, newValue) => { setActiveTab(newValue) }

  return (
    <div>
      <AppBar position="fixed">
        <Tabs value={activeTab} onChange={handleTabs} centered >
          <Tab label="Wrangler" />
          <Tab label="Project manager" />
          <Tab label="Cookbook" />
        </Tabs>
      </AppBar>

      { activeTab === 0 && <Wrangler />}
      { activeTab === 1 && <ProjectManager />}
      { activeTab === 2 && <Cookbook />}

    </div>
  )
}
export default Main