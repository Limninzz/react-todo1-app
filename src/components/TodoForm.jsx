import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
      }
    
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    console.log(title)

  return (
    <div style={styles.container}>
      <form
        style={styles.form}
        onSubmit={(event) => {
            handleSubmit(event)
        }}
      >
        <input
            type="text"
            placeholder="Add your Todo"
            style={styles.formInput}
            onChange={(event) => {
            handleChangeTitle(event)
            }}
            value={title}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '70px',
    width: '60%',
    fontSize: '24px',
    padding: '0 16px',
    textAlign: 'center',
    borderRadius: '10px',
  },
  button: {
    height: '72px',
    fontSize: '20px',
    backgroundColor: 'orange',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
}

export default TodoForm