import { useState } from "react"
import "../global.css"
import { Header } from "./components/Header/Header"
import { InfosTasks } from "./components/InfoTasks/InfosTasks"
import { ListTasks } from "./components/ListTasks/ListTasks"
import { NewTask } from "./components/NewTask/NewTask"
import { Task } from "./types/Task"

function App() {
  const [count, setCount] = useState(0)
  const [countChecked, setCountCheck] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([])

  function CreateTask(newTask: Task) { 
      setTasks([...tasks, newTask])
  }

  return (
    <>
      <Header />
      <NewTask onCreateTask={CreateTask}/>
      <InfosTasks totalTasks={tasks.length} completedTasks={countChecked} />
      <ListTasks tasks={tasks} setTasks={setTasks} setCountCheck={setCountCheck} setCount={countChecked}/>
    </>
  )
}

export default App
