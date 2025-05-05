import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';


function App() {
  
  return (
    <div className='app-wraper'>
        <Header />
        <NavBar />
        <Profile />
    </div>
  );
}

export default App;
