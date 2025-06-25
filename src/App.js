import styles from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setigns from './components/Setigns/Setigns';

function App(props) {

  return (
    <BrowserRouter> 
    <div className={styles.appWrapper}>
      <Header />
      <NavBar />
      <div className={styles.appWrapperContent}>
      <Routes>
        <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
        <Route path="/dialogs" element={<Dialogs state={props.state.dialogPage} />} />
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
