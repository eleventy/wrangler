import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const DriveCard = ({ drive }) => {
  const classes = useStyles()

  return (
    <Button variant="outlined" color='inherit' className={classes.root}>
      <div>{drive.path}</div>
    </Button>
  )
}
DriveCard.propTypes = {
  drive: PropTypes.object.isRequired
}
export default DriveCard

///////

const useStyles = makeStyles( theme => ({
  root: {
    margin: 5
  },
}))