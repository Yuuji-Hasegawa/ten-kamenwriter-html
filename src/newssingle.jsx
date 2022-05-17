import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='HPリニューアルのお知らせ' pagePath='/news/single/' />
    <PageHeading pageTitle='HPリニューアルのお知らせ' />
    <main className='o-container o-container:main'>
      <article className='c-entry c-entry:single'>
        <header className='o-cluster o-cluster:newsSingle'>
          <time className='o-has-icon o-has-icon:time' dateTime='2022-00-00'>
            <FontAwesomeIcon icon={faClock} />
            2022.00.00
          </time>
          <time className='o-has-icon o-has-icon:time' dateTime='2022-00-00'>
            <FontAwesomeIcon icon={faArrowRotateRight} />
            2022.00.00
          </time>
        </header>
        <div>ニュース本文</div>
        <div className='c-input-copy'>
          <input
            className='c-input c-input:share'
            type='text'
            value='この記事のURLこの記事のURLこの記事のURLこの記事のURL'
            readonly='true'
          />
          <button className='c-btn c-btn:copy'>コピー</button>
        </div>
        <footer className='c-news-cta'>
          <h3>この記事のお問い合わせ先</h3>
          <dl className='c-table'>
            <dt className='c-table__title'>facebook</dt>
            <dd className='c-table__content'>
              <a
                className='c-link c-link:inline'
                href='https://www.facebook.com/kamenwriter01'
                target='_blank'
                rel='noopener'
              >
                https://www.facebook.com/kamenwriter01
              </a>
            </dd>
            <dt className='c-table__title'>twitter</dt>
            <dd className='c-table__content'>
              <a
                className='c-link c-link:inline'
                href='https://twitter.com/kamenwriter02'
                target='_blank'
                rel='noopener'
              >
                https://twitter.com/kamenwriter02
              </a>
            </dd>
            <dt className='c-table__title'>E-mail</dt>
            <dd className='c-table__content'>
              <a className='c-link c-link:inline' href='mailto:info@kamenwriter.com' target='_blank' rel='noopener'>
                info@kamenwriter.com
              </a>
            </dd>
          </dl>
          <a className='c-btn c-btn:cta'>お問い合わせフォームへ</a>
        </footer>
      </article>
    </main>
    <Footer />
  </React.StrictMode>,
);
