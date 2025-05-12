import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';
import Task from './Task';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-wraper">
              <Header />
              <NavBar />
              <Profile />
            </div>
          }
        />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
