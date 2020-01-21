import React, { useReducer } from 'react'
import nanoid from 'nanoid'
import {
  Container, Button, Input, StyledSelect,
} from './styles'

const options = [
  { value: '#2f00ff', label: 'Darker blue' },
  { value: '#016afb', label: 'Dark blue' },
  { value: '#03A0ff', label: 'Medium blue' },
  { value: '#00d2ff', label: 'Light blue' },
  { value: '#00ecff', label: 'Lighter blue' },
]

const customStyles = {
  option: (provided, state) => ({
    borderBottom: '1px solid lightgray',
    color: state.isSelected ? 'gray' : 'black',
    padding: 15,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

const InputRow = ({ todos, setTodos }) => {
  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [newTodo, editTodo] = useReducer(reducer, { id: nanoid(), text: '', color: '' })

  return (
    <Container>
      <Input placeholder="New Todo" name="text" value={newTodo.words} onChange={e => editTodo({ [e.target.name]: e.target.value })} />
      <StyledSelect onChange={e => editTodo({ color: e.value })} styles={customStyles} placeholder="Color" options={options} />
      <Button
        name="id"
        onClick={e => {
          editTodo({ [e.target.name]: nanoid() })
          setTodos([...todos, newTodo])
        }}
      >
Add Task

      </Button>
    </Container>
  )
}

export default InputRow

// {allTodos.map(({todo, id}) => <p key={id}>{todo}</p>)}
