import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { MyImage } from './components/myimage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCode } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='これまでの記録' pagePath='/history/' />
    <PageHeading pageTitle='これまでの記録' />
    <main className='o-container o-container:main'>
      <article className='c-entry'></article>
    </main>
    <Footer />
  </React.StrictMode>,
);
