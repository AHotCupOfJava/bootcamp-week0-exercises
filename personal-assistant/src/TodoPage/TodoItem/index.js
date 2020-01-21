import React from 'react'
import {Container, Button, Text, Dot} from './styles'

const TodoItem = ({todos, setTodos, text, id, color}) => (
    <Container>
            <Button type="button" onClick={() => {
                setTodos(todos.filter(t => {
                    if (id === t.id) {
                        return false
                    }
                    return true
                }))
            }}>X</Button>
            <Dot style={{backgroundColor: color}}/>
            <Text>{text}</Text>
    </Container>
)

export default TodoItem