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
    <BreadCrumb pageTitle='仮面ライターとは？' pagePath='/aboutus/' />
    <PageHeading pageTitle='仮面ライターとは？' />
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
            ■体重：No Data
            <br />
            ■主要な言語など：HTML/CSS,Javascript,PHP,WordPress
            <br />
            ■主要な資格など：漢字検定2級,電気通信事業者（届出番号 E-28-03961）
            <br />
            コーディングは常人よりやや早く、作業中の判断力、集中力にも優れている。空気の読めなさやノリの悪さに定評アリ。
            <br />
            必殺技は、歯に絹着せぬ物言いで放つ「ライダーキック」など
          </p>
          <h2 className='c-min-heading'>これまでの主な仕事</h2>
          <ul className='o-switcher o-switcher:oneThird u-mb-m'>
            <li className='o-stack o-stack:aboutus'>
              <FontAwesomeIcon icon={faCode} size='3x' />
              <b>Webサイト制作</b>
            </li>
            <li className='o-stack o-stack:aboutus'>
              <FontAwesomeIcon icon={faChartLine} size='3x' />
              <b>コンサルティング</b>
            </li>
            <li className='o-stack o-stack:aboutus'>
              <FontAwesomeIcon icon={faFile} size='3x' />
              <b>文書作成</b>
            </li>
          </ul>
          <dl className='c-table u-mb-s'>
            <dt className='c-table__title'>Webサイト制作</dt>
            <dd className='c-table__content'>
              <ul className='c-list'>
                <li>デザインデータや原稿を元にしたコーディングのみ</li>
                <li>全体設計、内容の提案からサイト公開まで一式</li>
                <li>HTMLデータのWordPress化、カートのカスタマイズなど</li>
              </ul>
            </dd>
            <dt className='c-table__title'>コンサルティング</dt>
            <dd className='c-table__content'>
              <ul className='c-list'>
                <li>アクセス解析や実際のコードを元にしたサイト改善</li>
                <li>マーケティング施策の提案、ならびにサイトの改修</li>
                <li>情報設計、コンテンツマーケティングの提案など</li>
              </ul>
            </dd>
            <dt className='c-table__title'>文書作成</dt>
            <dd className='c-table__content'>
              <ul className='c-list'>
                <li>原稿を元にした加筆修正、校正</li>
                <li>会社案内の作成、文書添削、構成提案</li>
                <li>インタビューを元にしたブログ記事作成など</li>
              </ul>
            </dd>
          </dl>
          <p>
            上記以外にも、SNSの運用代行や自営業経験をもとにした提案、規約の作成や事務作業のサポートなども行なっています。
            <br />
            <b>「エンジニア×物書き×自営業」</b>でできそうなことがあれば、お声かけください。
          </p>
        </div>
      </div>
      <article className='c-entry'></article>
    </main>
    <Footer />
  </React.StrictMode>,
);
