import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './helpers/theme'
import Main from './Main'
import { store, Context } from './store'

const App = () => {
  return (
    <Context.Provider value={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Main />
        </ThemeProvider>
      </StyledEngineProvider>
    </Context.Provider>
  )
}

export default App
