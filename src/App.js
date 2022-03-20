import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Allproducts from './Components/Allproducts/Allproducts';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  const setCartCount = () =>{
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Header count = {count} ></Header>
      <Allproducts setCartCount = {setCartCount}></Allproducts>
    </div>
  );
}

export default App;
