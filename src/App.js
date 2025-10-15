import styles from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setigns from './components/Setigns/Setigns';
import UsersContainer from './components/Users/UsersContainer';

function App() {

  return (
    <BrowserRouter> 
    <div className={styles.appWrapper}>
      <Header />
      <NavBar />
      <div className={styles.appWrapperContent}>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<DialogsContainer />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Setigns />} />
        <Route path="/users" element={<UsersContainer />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
