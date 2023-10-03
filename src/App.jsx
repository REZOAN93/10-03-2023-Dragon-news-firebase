import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Shared/Header/Header'

function App() {

  return (
    <div className='container mx-auto my-5'>
    <Header></Header>
    <Outlet></Outlet>
    </div>
  )
}

export default App
