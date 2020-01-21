import React, { useState } from 'react'
import InputRow from './InputRow'
import SearchRow from './SearchRow'
import TodoItem from './TodoItem'
import NavBar from '../NavBar'
import {
  Page, Container, Title, Text, Button,
} from './styles'


const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  console.log(todos)
  console.log(search)

  return (
    <Page>
      <NavBar />
      <Container>
        <InputRow todos={todos} setTodos={setTodos} />
        <SearchRow search={search} setSearch={setSearch} />
        <Title>Your Todos:</Title>
        {todos.length > 0
          ? todos.filter(({ text }) => (text.includes(search)))
            .map(({ id, text, color }) => (
              <TodoItem
                key={id}
                text={text}
                id={id}
                color={color}
                todos={todos}
                setTodos={setTodos}
              />
            ))
          : <Text>No todos. Enjoy your day!</Text>}
        {todos.length > 0
          ? <Button onClick={() => setTodos([])}>Clear Todos</Button>
          : null}
      </Container>
    </Page>
  )
}

export default TodoPage
