import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Homepage></Homepage>
      </div>
    </div>
  );
}

export default App;
