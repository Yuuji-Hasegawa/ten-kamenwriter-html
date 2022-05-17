import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='会社情報' pagePath='/company/' />
    <PageHeading pageTitle='会社情報' />
    <main className='o-container o-container:main'>
      <article className='c-entry'>
        <dl className='c-table'>
          <dt className='c-table__title'>名称</dt>
          <dd className='c-table__content'>仮面ライター</dd>
          <dt className='c-table__title'>代表者</dt>
          <dd className='c-table__content'>長谷川　雄治</dd>
          <dt className='c-table__title'>創業</dt>
          <dd className='c-table__content'>2013年4月26日</dd>
          <dt className='c-table__title'>所在地</dt>
          <dd className='c-table__content'>〒567-0005 茨木市五日市2</dd>
          <dt className='c-table__title'>メールアドレス</dt>
          <dd className='c-table__content'>
            <a
              className='c-link c-link:inline'
              href='mailto:info@kamenwriter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              info@kamenwriter.com
            </a>
          </dd>
          <dt className='c-table__title'>事業内容</dt>
          <dd className='c-table__content'>
            <ul className='c-list'>
              <li>Webサイト制作</li>
              <li>Web/SNS活用サポート</li>
              <li>コンテンツ制作</li>
              <li>Webコンサルティング</li>
              <li>ドメイン、サーバ取得代行</li>
              <li>その他、上記に係る業務</li>
            </ul>
          </dd>
        </dl>
      </article>
    </main>
    <Footer />
  </React.StrictMode>,
);
