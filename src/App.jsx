// CSS
import './App.scss'

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Context
import { CartProvider } from './contexts/CartContext'

// Components
import NavBar from './components/NavBar/NavBar'

// Pages
import Home from './pages/Home/Home'
import ItemsCateogries from './pages/Categories/ItemsCateogries'
import ItemDetail from './pages/ItemDetail/ItemDetail'
import Cart from './pages/Cart/Cart'
import OrderForm from './pages/OrderForm/OrderForm'
import Register from './pages/Register/Register'
import LoginPage from './pages/User/Login'

// TanStack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient()
  return (
    <div className='App'>
      <Router>
        <CartProvider>
          <QueryClientProvider client={client}>
            <NavBar />

            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/category/:categoryId' element={<ItemsCateogries />} />

              <Route path='/item/:id' element={<ItemDetail />} />

              <Route path='*' />

              <Route path='/cart' element={<Cart />} />

              <Route path='/order' element={<OrderForm />} />

              <Route path='login' element={<LoginPage />} />

              <Route path='register' element={<Register />}></Route>
            </Routes>
          </QueryClientProvider>
        </CartProvider>
      </Router>
    </div>
  )
}

export default App