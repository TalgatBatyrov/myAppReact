import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let dialog = [
  { name: 'Dimych', id: 1 },
  { name: 'Andrey', id: 2 },
  { name: 'Sveta', id: 3 },
  { name: 'Sasha', id: 4 },
  { name: 'Victor', id: 5 },
  { name: 'Valera', id: 6 },
]

let message = [
  { message: 'Hi', id: 1 },
  { message: 'How is your IT-Kamasutra', id: 2 },
  { message: 'Yo', id: 3 },
]

let posts = [
  { message: 'HI', likesCount: 10, id: 1 },
  { message: 'HEY', likesCount: 15, id: 2 },
]


ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialog} message={message} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
