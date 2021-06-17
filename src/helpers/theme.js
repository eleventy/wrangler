import { createTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import lightGreen from '@material-ui/core/colors/lightGreen'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#222222',
      default: '#101010'
    },
    primary: {
      main: lightGreen['A200'],
    },
    secondary: {
      main: blue[500],
    },
  },
})
console.log(theme)

export default theme