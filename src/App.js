
import './App.css';
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Forms from './components/Form';
import Carousels from './components/Carousels';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />
      <h2> Welcome To My Page</h2>
      <br />
      <Carousels />
      <br />
      <br />
      <Forms/>
    
    </div>
  );
}

export default App;
