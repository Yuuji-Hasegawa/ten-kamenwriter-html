import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { PpInner } from './components/ppinner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='プライバシーポリシー' pagePath='/privacy-policy/' />
    <PageHeading pageTitle='プライバシーポリシー' />
    <main className='o-container o-container:main'>
      <PpInner />
    </main>
    <Footer />
  </React.StrictMode>,
);
