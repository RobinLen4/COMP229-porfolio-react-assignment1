import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './mainRouter.jsx';

function App() {
  return <MainRouter />;
}

export default App;
