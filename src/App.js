import './App.css';
import Header from './components/Header';
import NavBar from './components/Nav-bar';
import Profile from './components/Profile';


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
