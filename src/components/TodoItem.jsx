import React from 'react'


const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  return (
    <div style={styles.todoItem}>
      {/* Cross Out Item */}
      <input 
      type="checkbox" 
      style={styles.checkbox}
      onChange={() => toggleCompleted(todo.id)}
      />
      {/* Cross Out Item */}

      {/* todo list  */}
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      {/* todo list  */}

      {/* delete todo */}
      <button 
      style={styles.button}
      onClick={() => deleteTodo(todo.id)}
      ><p style={styles.innerButton}>X</p></button>
      {/* delete todo */}
      
    </div>
  )

}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    borderRadius: '15px',
    color: 'azure',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    margin: '5px auto',
    textShadow: '0 0 3px cyan, 0 0 5px lime',
  },
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    // height: '30px',
    width: '20px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '10px',
  },
  innerButton: {
    display: 'inline',
    position: 'relative',
    fontSsize: '20px',
    // top: '-10px',
    left: '-3px',
  }
}
  
export default TodoItem
