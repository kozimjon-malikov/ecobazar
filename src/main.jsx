import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import rootReducer from './redux/index.js'
import { thunk } from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
