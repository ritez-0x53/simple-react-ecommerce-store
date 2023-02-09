import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import "./App.css"

const name = prompt("username");

function App() {
  const [username , setUsername] = useState("")
  
  useEffect(()=>{
    setUsername(username => name)
  } ,[])
  return username === "" || username == null ? <div>
    Refresh again and Enter your username !
  </div> : <BrowserRouter> <Header user={name} /> 
    <Routes>
      <Route>
        <Route path='/' element={<Home user={name}/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/profile' element={<Profile name={name}/>}></Route>
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>

}

export default App

/*
<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
*/