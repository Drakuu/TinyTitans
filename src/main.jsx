import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CartProvider } from "./context/CartContext"; // ✅ Ensure correct path
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>  {/* ✅ Wrap the entire App inside CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>,
)
