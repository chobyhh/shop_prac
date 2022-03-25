import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux'
import { combineReducers, createStore } from 'redux';




  
let alertC = true

function reducer2(state = alertC, action){
  
  if (action.type === '닫기'){
    state = false
    return state
  } else {
    return state;
  }


}

let proto = [
  { id : 0, name : '신발쓰', quan : 2 },
  { id : 1, name : '신발쓰2', quan : 3 }
]


function reducer(state = proto, action){
  
  if (action.type === '증가'){
    
    let copy = [...state];
    copy[0].quan++
    return copy
  } else if (action.type === '감소') {
    
    let copy = [...state];
    copy[0].quan--
    return copy
  } else {
    return state
  }
  
}

let store = createStore(combineReducers({reducer, reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
