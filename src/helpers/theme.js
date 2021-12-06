import { createTheme } from '@mui/material/styles'
import { blue, lightGreen } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#222222',
      default: '#101010'
    },
    primary: {
      main: lightGreen.A200
    },
    secondary: {
      main: blue[500]
    }
  }
})
export default theme
