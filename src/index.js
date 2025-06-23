import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

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

root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
