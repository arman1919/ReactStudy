import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="app-wraper">
      <Header />
      <NavBar />
      <div className="app-wraper-content">
          {/* <Profile /> */}
          <Dialogs/>
      </div>

    </div>
  );
}

export default App;
