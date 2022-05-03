import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home */}
          <Route path="/" exact element={
            <div>
              <Header />
              <Home />
            </div>
          } />

          {/* Login */}
          <Route path="/login" element={
              <Login/>          
          } />

          {/* Basket */}
          <Route path="/checkout" element={
            <div>
              <Header />
              <Checkout />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
