import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { InqInner } from './components/inquiryinner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='お問い合わせ' pagePath='/inquiry/' />
    <PageHeading pageTitle='お問い合わせ' />
    <main className='o-container o-container:main'>
      <InqInner />
    </main>
    <Footer />
  </React.StrictMode>,
);
