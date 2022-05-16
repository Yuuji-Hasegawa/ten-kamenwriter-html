import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { IndexNews } from './components/indexnews';
import { IndexBlog } from './components/indexblog';
import { Footer } from './components/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <main className='o-container o-container:main'>
      <IndexNews />
      <IndexBlog />
    </main>
    <Footer />
  </React.StrictMode>,
);
