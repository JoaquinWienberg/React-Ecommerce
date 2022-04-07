import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar';
import HomePage from './pages/home';
import ProductDetail from './pages/ProductDetail'
import Catalog from './pages/ProductList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductCategory from './pages/Category';
import Cart from './pages/Cart'

function App() {
  return ( 
    <div className="App">
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<Catalog />}/>
        <Route path="/products/:category" element={<ProductCategory />}/>
        <Route path="/products/:category/:id" element={<ProductDetail />}/>
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
