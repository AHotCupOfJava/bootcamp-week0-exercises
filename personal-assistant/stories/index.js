import React from 'react'
import { storiesOf } from '@storybook/react'
import ExampleComponent from '../src/ExampleComponent'
import InputRow from '../src/InputRow'
import theme from '../src/theme.js'
import App from '../src/App'
import { ThemeProvider } from 'styled-components'

storiesOf('ExampleComponent', module).add("It's me", () => (
  <ThemeProvider theme={theme}>
    <ExampleComponent alertText="Hewo der 💩" />
    <InputRow/>
  </ThemeProvider>
))

storiesOf('App', module).add('App', () => (
    <App />
))
