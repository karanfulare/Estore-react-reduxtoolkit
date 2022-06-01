import { useEffect } from 'react';
import Products from './components/Products';
import './App.css';
import  {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Addproduct from './components/Addproduct';
import Cart from './components/Cart';


function App() {
  return (
    <>
    <div className="App">
      <h4>Navbar
      <ul>
      <Link to="/addproduct">Add a product </Link> 
      <br/>
      <Link to="/cart">Cart</Link>
      </ul>
      </h4>
      <Products/>
      
    </div>
    </>
  );
}

export default App;
