import React from 'react'
import { Heading } from './styles'

const Greeting = () => {
  const time = (new Date()).getHours()
  let greeting = ''
  if (time > 4 && time < 12) {
    greeting = 'Good Morning!'
  } else if (time >= 12 && time < 18) {
    greeting = 'Good Afternoon!'
  } else {
    greeting = 'Good Evening!'
  }

  return (<Heading>{ greeting }</Heading>)
}

export default Greeting
