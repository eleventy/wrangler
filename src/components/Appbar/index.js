import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const Appbar = () => {
  const classes = useStyles()


  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          Wrangler
        </Typography>
        <IconButton edge="end" color='inherit' aria-label="settings">
          <FontAwesomeIcon icon={faCog} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
Appbar.propTypes = {

}
export default Appbar

////////////
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))