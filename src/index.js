import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/reduxStore';


export let rerenderIntireTree = (state) => {

  console.log(store);
  console.log(store);
  debugger;

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderIntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderIntireTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
