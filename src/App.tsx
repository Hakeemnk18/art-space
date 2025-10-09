
import { Outlet } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import ErrorBoundary from './features/shared/component/ErrorBoundary'
import { Navbar } from './features/shared/component/Navbar'



function App() {


  return (
    <div className="bg-gray-100 min-h-screen"> 
      <ErrorBoundary>
        <ToastContainer position="top-right" autoClose={1000} />
        <Navbar />
        <Outlet />
      </ErrorBoundary>
    </div>
  )
}

export default App
