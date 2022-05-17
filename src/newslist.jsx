import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { NewsInner } from './components/newsinner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='お知らせ 一覧' pagePath='/news/' />
    <PageHeading pageTitle='お知らせ一覧' />
    <main className='o-container o-container:main'>
      <NewsInner />
    </main>
    <Footer />
  </React.StrictMode>,
);
