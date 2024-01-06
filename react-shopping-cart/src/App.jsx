import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Routes>        
                <Route path="/"  element={<Products/>} />
                <Route path="/products"  element={<Products />}/>
                <Route path="/cart"  element={<Cart/>}/>
            </Routes>
        </>
    )
}

export default App
