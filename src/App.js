import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setigns from './components/Setigns/Setigns';

function App() {
  return (
    <BrowserRouter> 
    <div className="app-wraper">
      <Header />
      <NavBar />
      <div className="app-wraper-content">
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<Dialogs />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Setigns />} />
      </Routes>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
