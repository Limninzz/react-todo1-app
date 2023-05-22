import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

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

  console.log(todos)

  return (
    <div>
      <h1>My Todo List</h1>
      
      <Todos todos = {todos}/>
    </div>
  )
}

export default App