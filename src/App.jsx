import { useState } from 'react'

import './App.css'
import { CartProvider } from './CartContext'
import CartPage from './CartPage'
function App() {

  return (
    <>
    <CartProvider>
      <div className='App'>
        <CartPage></CartPage>
      </div>
    </CartProvider>
      
    </>
  )
}

export default App
