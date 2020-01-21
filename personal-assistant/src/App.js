import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import TodoPage from './TodoPage'
import HomePage from './HomePage'
import theme from './theme'

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/todos">
          <TodoPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  </div>

)

export default App
