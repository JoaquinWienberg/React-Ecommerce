import './App.css';

// COMPONENTS
import ResponsiveAppBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import { CartShowcase } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import HomePage from './pages/home';
import ProductDetail from './pages/ProductDetail'
import Catalog from './pages/ProductList'
import Cart from './pages/Cart'
import ProductCategory from './pages/Category';
import Faq from './pages/faq'
import ContactUs from './pages/contactUs'
import Error404 from './pages/404'



function App() {
  return ( 
    <div className="App">
    <CartShowcase>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/products" element={<Catalog />}/>
          <Route path="/products/:category" element={<ProductCategory />}/>
          <Route path="/products/:category/:id" element={<ProductDetail />}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartShowcase>
    </div>
  );
}

export default App;
