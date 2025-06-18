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

    let dialogsData = [
      {id: 1, name: "John"},
      {id: 2, name: "Jane"},
      {id: 3, name: "Jim"},
      {id: 4, name: "Alex"},
      {id: 5, name: "Bob"},
      {id: 6, name: "Charlie"},
      {id: 7, name: "David"},
      {id: 8, name: "Ethan"},
      {id: 9, name: "Frank"},
      {id: 10, name: "George"},
      {id: 11, name: "Hannah"},
  ]

  let messages = [
      {id: 1, message: "Hello"},
      {id: 2, message: "How are you?"},
      {id: 3, message: "I'm fine, thank you!"},
      {id: 4, message: "What are you doing?"},
      {id: 5, message: "I'm doing nothing."},
  ]

  let postsData = [
    {id: 1, message: "Hello", likesCount: 10},
    {id: 2, message: "How are you?", likesCount: 45},
  ]

  return (
    <BrowserRouter> 
    <div className="app-wraper">
      <Header />
      <NavBar />
      <div className="app-wraper-content">
      <Routes>
        <Route path="/profile" element={<Profile postsData={postsData} />} />
        <Route path="/dialogs" element={<Dialogs dialogsData={dialogsData} messagesData={messages} />} />
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
