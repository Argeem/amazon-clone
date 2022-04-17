import './App.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/> {/* Home */}
          <Route path="/checkout" element={<Checkout/>}/> {/* Basket */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
