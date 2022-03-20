import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Allproducts from './Components/Allproducts/Allproducts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Allproducts></Allproducts>
    </div>
  );
}

export default App;
