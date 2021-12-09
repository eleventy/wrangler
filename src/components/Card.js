import React from 'react'
// import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/styles'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'

const Card = ({ children, color = 'secondary' }) => {
  const theme = useTheme()
  const style = {
    padding: 10,
    margin: 10,
    backgroundColor: theme.palette.background.default,
    borderWidth: 2,
    borderColor: theme.palette[color].main,
    borderStyle: 'solid'
  }
  return (
    <Paper style={style}>
      {children}
    </Paper>
  )
}
Card.propTypes = {
  children: PropTypes.array,
  color: PropTypes.string
}
export default Card
