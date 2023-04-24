// CSS
import "./App.css";

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { CartProvider } from "./contexts/CartContext";

// Components
import NavBar from "./components/NavBar/NavBar";

// Pages
import Home from "./pages/Home/Home";
import ItemsCateogries from "./pages/Categories/ItemsCateogries";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Cart from "./pages/Cart/Cart";

// Tanstack React Query

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<ItemsCateogries />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="*" />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
