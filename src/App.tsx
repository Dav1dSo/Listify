import { useState } from "react"
import "../global.css"
import { Header } from "./components/Header/Header"
import { InfosTasks } from "./components/InfoTasks/InfosTasks"
import { ListTasks } from "./components/ListTasks/ListTasks"
import { NewTask } from "./components/NewTask/NewTask"
import { Task } from "./types/Task"

function App() {
  
  const [tasks, setTasks] = useState<Task[]>([])

  function CreateTask(newTask: Task) { 
      setTasks([...tasks, newTask])
  }

  return (
    <>
      <Header />
      <NewTask onCreateTask={CreateTask}/>
      <InfosTasks />
      <ListTasks tasks={tasks} />
    </>
  )
}

export default App
