import { GlobalStyle } from 'GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'styles/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Hero, Reviews, Service } from 'components'
import Menu from 'components/Menu'

function App () {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Menu />
        <Service />
        <Reviews />
      </ThemeProvider>
    </Router>
  )
}

export default App
