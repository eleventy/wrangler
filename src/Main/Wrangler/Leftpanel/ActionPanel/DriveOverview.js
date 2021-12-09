import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import filesize from 'filesize'
import Card from '../../../../components/Card'

const DriveOverview = ({ drive, files }) => {
  return (
    <Card>
      <Typography variant='caption' display='block' color='textSecondary'>
        &nbsp;&nbsp;{drive} : {filesInfo(files)}
      </Typography>
    </Card>
  )
}
DriveOverview.propTypes = {
  drive: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired
}
export default DriveOverview

///

const filesInfo = files => {
  const todoFiles = files.filter(file => file.status === 'todo')
  return `${todoFiles.length} of ${files.length} clips | ` +
  `${filesize(totalFileSize(todoFiles))} GB `
}

const totalFileSize = files => files.reduce((acc, cur) => acc + cur.size, 0)
