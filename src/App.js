import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './data/StateProvider';


function App() {
  const[,dispatch] = useStateValue()

  useEffect(()=>{
    // only run once when the app loads
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USERS IS >>>',authUser)
      if(authUser){
        //loged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //logout
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // eslint-disable-next-line
  },[])

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
