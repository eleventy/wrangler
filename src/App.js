import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './helpers/theme'
import Main from './Main'
import { store, Context } from './store'

const App = () => {
  
  return (
    <Context.Provider value={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
