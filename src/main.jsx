import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import './index.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_ID = import.meta.env.VITE_APP_ID;
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'mesopotamia-36df5.firebaseapp.com',
  projectId: 'mesopotamia-36df5',
  storageBucket: 'mesopotamia-36df5.appspot.com',
  messagingSenderId: '882257115270',
  appId: API_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
