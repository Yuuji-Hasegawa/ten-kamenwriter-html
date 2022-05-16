import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { TermsInner } from './components/termsinner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='利用規約' pagePath='/terms/' />
    <PageHeading pageTitle='利用規約' />
    <main className='o-container o-container:main'>
      <TermsInner />
    </main>
    <Footer />
  </React.StrictMode>,
);
