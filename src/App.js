import { useEffect } from 'react';
import Products from './components/Products';
import './App.css';
import  {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Products/>
      
    </div>
    </>
  );
}

export default App;
