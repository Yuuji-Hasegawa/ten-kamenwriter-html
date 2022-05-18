import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { MyImage } from './components/myimage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='仮面ライター' pagePath='/aboutus/' />
    <PageHeading pageTitle='仮面ライター' />
    <main className='o-container o-container:main'>
      <div className='o-switcher o-switcher:media'>
        <div className='c-media-pict'>
          <MyImage className='o-frame o-frame:logo' src='/img/logo.svg' alt='仮面ライター' />
        </div>
        <div className='c-media-body'>
          <h2 className='c-min-heading c-min-heading:first'>スペック</h2>
          <p>
            ■身長：174cm
            <br />
            ■体重：XXkg
            <br />
            ■主要な言語など：HTML/CSS,Javascript,PHP,WordPress
            <br />
            ■主要な資格など：漢字検定2級,電気通信事業者（届出番号 E-28-03961）
            <br />
            コーディングは常人よりやや早く、作業中の判断力、集中力にも優れている。空気の読めなさやノリの悪さに定評アリ。
            <br />
            必殺技は、歯に絹着せぬ物言いで放つ「ライダーキック」など
          </p>
          <h2 className='c-min-heading'>主要な業務</h2>
          <ul className='c-list u-mb-s'>
            <li>具体的なデータの加工、コーディング</li>
            <li>メッセージの効果的な発信、編集、校正</li>
            <li>ペルソナの鮮明化、施策、コンテンツの検討など</li>
          </ul>
          <p>
            コーディング関連や文章絡みに強い。人が何を欲するか、発信したメッセージをどう受け止めるかにも多少明るい。デザインや抽象的なイメージ、イラストは不得手。
          </p>
        </div>
      </div>
      <article className='c-entry'></article>
    </main>
    <Footer />
  </React.StrictMode>,
);
