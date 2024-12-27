import "../global.css"
import { Header } from "./components/Header/Header"
import { InfosTasks } from "./components/InfoTasks/InfosTasks"
import { ListTasks } from "./components/ListTasks/ListTasks"
import { NewTask } from "./components/NewTask/NewTask"

function App() {

  return (
    <>
      <Header />
      <NewTask />
      <InfosTasks />
      <ListTasks />
    </>
  )
}

export default App
