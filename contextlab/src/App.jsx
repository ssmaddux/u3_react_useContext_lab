import { useState } from 'react'
import './App.css'
import UserContext from './UserContext'
import Header from '../components/Header'
import Home from '../components/Home'

function App() {

  const initialUserData = {
    username: '',
    password: '',
    lastLogin: ''
  }


  const [userData, setUserData] = useState({initialUserData})

  return (
    <UserContext.Provider value={{ userData, setUserData,initialUserData }}>
    <div className='appDiv'>
      <Header/>
      <Home/>
    </div>
    </UserContext.Provider>
  )
}

export default App
