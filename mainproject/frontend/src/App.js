import Navbar from './Navbar';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTask from './CreateTask';
import TaskDetails from './TaskDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="flex-container">
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Homepage></Homepage>}></Route>
              <Route path="/createTask" element={<CreateTask></CreateTask>}></Route>
              <Route path="/tasks/:id" element={<TaskDetails></TaskDetails>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
