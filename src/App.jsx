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
      
    const myItem = document.querySelectorAll('#todo_list')[findIndex];

    const animateTodoList = document.getElementById('todo_list');
    
    const myP = document.querySelectorAll('#myP')[findIndex];
    const delete_btn = document.querySelectorAll('#delete_btn')[findIndex];
    const check = document.querySelectorAll('#check')[findIndex];

    delete_btn.style.display = 'none';
    check.style.display = 'none';
    myP.style.display = 'none';

    myItem.style.width = '1px';
    myItem.style.height = '1px';
    myItem.style.transform = 'rotate(360deg)';
    
    
    setTimeout(() => {
      if(findIndex !== -1){
        todos.splice(findIndex,1);
      }
      const deleteTodo = todos.map((todo) => {
        // console.log(todo);
        return todo
      }) 
  
      setTodos(deleteTodo);
    }, 2000);

  }
  

  const addTodo = (todoTitle) => {
    // console.log('This is addTodo Function is ')
    let newTodo ={};
    if(todoTitle === ''){
      return
    }
    if(todos.length >= 1){
      newTodo = {
        id: todos[todos.length-1].id+1,
        title: todoTitle,
        completed: false,
      }
    }else {
      newTodo = {
        id: todos.length+1,
        title: todoTitle,
        completed: false,
      }
    }

    const updatedTodos = todos.concat (newTodo)
    setTodos(updatedTodos)
  }

  return (
    <div style={styles.wrapper}>
        <div style={styles.container}>
          <h1 style={{fontSize: '36px'}}>My Todo List</h1>
          <TodoForm addTodo={addTodo} />
          <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to right, #88def5, #00ffb1, #ffffff, #61dafb)',
    filter: 'drop-shadow(2px 5px 15px aqua)',
    padding: '12px',
    borderRadius: '15px',
  },
  container: {
    backgroundImage:"url(./src/assets/cubes-dark-minimalism-h8.jpg)",
    backgroundSize:'auto',
    // border: '5px solid cyan',
    textAlign: 'center',
    padding: '12px',
    borderRadius: '10px',
    // width: '100%',
  }

}
export default App