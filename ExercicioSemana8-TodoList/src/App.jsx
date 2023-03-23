import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListaTarefas from './components/ListaTarefas'

function App() {
  //estado base fica no app.jsx
  const [listaTarefas, setListaTarefas] = useState([{ id: 1, tarefa: 'Estudar React', finalizado : false }])

  //Funções principais ficam no app.jsx
  //function adicionar TodoList

  return (
    <div>
      <Header titulo = "TodoList" />
       <ListaTarefas />
      
    </div>
  )
}

export default App
