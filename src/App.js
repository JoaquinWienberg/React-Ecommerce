import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import HomePage from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
