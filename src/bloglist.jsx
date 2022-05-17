import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { BlogInner } from './components/bloginner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='トピックス 一覧' pagePath='/blog/' />
    <PageHeading pageTitle='トピックス 一覧' />
    <main className='o-container o-container:main'>
      <BlogInner />
    </main>
    <Footer />
  </React.StrictMode>,
);
