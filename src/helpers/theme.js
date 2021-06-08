import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import lightGreen from '@material-ui/core/colors/lightGreen'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: lightGreen['A200'],
    },
    secondary: {
      main: blue[500],
    },
  },
})

export default theme