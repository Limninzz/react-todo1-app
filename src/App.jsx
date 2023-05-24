import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }

// const App = () => {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count + 1);
//   }

//   // const handleDown = () => {
//   //   setCount(count -1);
//   // }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => {handleClick()}}>COUNT UP</button>
//       <button onClick={() => {handleDown()}}>COUNT UDOWN</button>
//     </div>
//   );
// }

// export default App;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  // console.log(todos)

  const toggleCompleted = (todoId) => {
    // console.log(todoId);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    // console.log('FUNCTION DELETE CALLED', todoId);
    const findIndex = todos.findIndex(t=>{
      return t.id === todoId;
    })
    if(findIndex !== -1){
      todos.splice(findIndex,1);
    }
    const deleteTodo = todos.map((todo) => {
      // console.log(todo);
      return todo
    }) 

    setTodos(deleteTodo);
  }

  const addTodo = (todoTitle) => {
    // console.log('This is addTodo Function is ')
    if(todoTitle === ''){
      return
    }
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }
    const updatedTodos = todos.concat (newTodo)
    setTodos(updatedTodos)
  }

  return (
    <div style={styles.container}>
      <h1 style={{fontSize: '36px'}}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
  )
}

const styles = {
  container: {
    border: '2px solid Red',
    textAlign: 'center',
    padding: '12px',
    borderRadius: '10px',
    // width: '100%',
  }

}
export default App