import { useEffect, useRef, useState } from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {

    const mouseRef = useRef(null)

    useEffect(() => {
        const updateMousePositionFunction = (event) => {
            if (!mouseRef.current) return
            const { clientX, clientY } = event;
            mouseRef.current.style.setProperty('--x', `${clientX}px`)
            mouseRef.current.style.setProperty('--y', `${clientY}px`)
        }
        window.addEventListener('mousemove', updateMousePositionFunction)

        return () => {
            window.removeEventListener('mousemove', updateMousePositionFunction)
        }
    }, []);
    
    const items = [
        {
            id: 1,
            itemName: "Nike Air Force 1 '07",
            price: "10,795.00",
            itemImage: "nike-air-force-107.png"
        },
        {
            id: 2,
            itemName: "Nike Air Jordan 1 Mid",
            price: "11,495.00",
            itemImage: "air-jordan-1-mid.png"
        },
        {
            id: 3,
            itemName: "Nike Air Max Pulse Roam",
            price: "14,995.00",
            itemImage: "air-max-pulse-roam-shoes.png"
        }
    ]

    return (
        <div ref={mouseRef} className='h-screen bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_50%,_transparent_100%)] '>
            <Navbar />
            <Routes>        
                <Route path="/"  element={<Products items={ items }/>} />
                <Route path="/products"  element={<Products items={ items }/>}/>
                <Route path="/cart"  element={<Cart />}/>
            </Routes>
        </div>
    )
}

export default App
