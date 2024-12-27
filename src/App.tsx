import "../global.css"
import { Header } from "./components/Header/Header"
import { InfosTasks } from "./components/InfoTasks/InfosTasks"
import { NewTask } from "./components/NewTask/NewTask"

function App() {

  return (
    <>
      <Header />
      <NewTask />
      <InfosTasks />
    </>
  )
}

export default App
