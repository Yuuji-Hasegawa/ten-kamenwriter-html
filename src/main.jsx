import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.scss';
import { Header } from './components/header';
import { Hero } from './components/hero';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <main className='o-container o-container:main'>
      <App />
    </main>
  </React.StrictMode>,
);
