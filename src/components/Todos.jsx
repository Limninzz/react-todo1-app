import React from 'react'
import TodoItem from '/src/components/TodoItem'

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
    {todos.map((todo) => {
      return (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          />
      )
    })}
  </div>
  )
}

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
  },
}

export default Todos