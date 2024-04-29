
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useContext } from 'react'
import { AuthContext } from './providers/AuthProvider'

function App() {
  const { loader } = useContext(AuthContext)
    if (loader) {
        return <div className="text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>

    }
  

  return (
    <>
      <div className='max-w-[1200px'>
        <Navbar></Navbar>
      </div>
      <div className='max-w-[1200px'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    
    </>
  )
}

export default App
