import './App.css'
import { List } from './components/List'
import { UserProvider } from './components/context'

function App() {

  return (
    <UserProvider>
      <List></List>
    </UserProvider>
  )
}

export default App
