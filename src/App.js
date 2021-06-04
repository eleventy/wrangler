import Appbar from './components/Appbar'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './helpers/theme'
import Layout from './Layout'
import { store, Context } from './store'


const App = () => {
  
  return (
    <Context.Provider value={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar />
        <Layout />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
