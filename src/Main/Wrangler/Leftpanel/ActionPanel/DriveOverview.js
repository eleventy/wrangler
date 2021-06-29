import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import filesize from 'filesize'

const DriveOverview = ({drive, files}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant='caption' display='block' color='textSecondary' >
        &nbsp;&nbsp;{drive} : { filesInfo(files) }
      </Typography>
    </Paper>
  )
}
DriveOverview.propTypes = {
  drive: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired
}
export default DriveOverview

//////////////////

const useStyles = makeStyles( theme => ({
  root: {
    padding: 4,
    margin: 6
  },
  progress: {
    height: 10
  }
}))

/////////////


const filesInfo = files => {
  const todoFiles = files.filter( file => file.status === 'todo')
  return `${todoFiles.length} of ${files.length} clips | `
  + `${filesize( totalFileSize(todoFiles))} GB `
}

const totalFileSize = files => files.reduce( (acc, cur) => acc + cur.size, 0 )
