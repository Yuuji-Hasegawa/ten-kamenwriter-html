import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { NotfoundInner } from './components/notfoundinner';
import { Footer } from './components/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='ページが見つかりません' pagePath='/404/' />
    <PageHeading pageTitle='ページが見つかりません' />
    <main className='o-container o-container:main'>
      <NotfoundInner />
    </main>
    <Footer />
  </React.StrictMode>,
);
