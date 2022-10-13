import logo from './logo.svg';
import './App.css';
import Storecontainer from './components/Store/Store.container';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Storecontainer></Storecontainer>
    </div>
  );
}

export default App;
