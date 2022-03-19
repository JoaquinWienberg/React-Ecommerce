import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import ProductList from './components/ProductList/ProductList';

function App() {
  return ( 
    <div className="App">
      <ResponsiveAppBar />
      <div>
        <h2>Nuevos ingresos</h2>
        <ProductList/>
      </div>
    </div>
  );
}



export default App;
