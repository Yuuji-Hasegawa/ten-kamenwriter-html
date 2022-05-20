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
    <BreadCrumb pageTitle='プロフィール' pagePath='/profile/' />
    <PageHeading pageTitle='プロフィール' />
    <main className='o-container o-container:main'>
      <article className='c-entry'>
        <div className='o-switcher o-switcher:media'>
          <div className='c-media-pict'>
            <MyImage className='o-frame o-frame:square' src='/img/profile.png' alt='プロフィール' />
          </div>
          <div className='c-media-body'>
            <dl className='o-stack o-stack:xxs'>
              <dt className='u-text-large'>
                <b>長谷川　雄治</b>
              </dt>
              <dd>
                <p>
                  昭和63年生まれ。大阪電気通信大学総合情報学部デジタルゲーム学科卒業。
                  <br />
                  十代からゲームシナリオライターを目指して執筆活動や、エンターテインメント関係の独学に励むも、就活は失敗に終わり夢破れる。
                </p>
                <p>
                  データ加工のアルバイト、Web制作のインターンを経て、2013年から「屋号：仮面ライター」として開業後、現在に至る。
                </p>
                <p>
                  姉妹を持つ真ん中っ子かつ転勤族という境遇から、周囲とのコミュニケーション、関係構築に興味を持ち、技術としてのコミュニケーションに強い関心を抱く。
                </p>
                <p>
                  アマチュアの物書きとして、言語や人間社会、記号論を理系、文系の両方の立場から考えることも最近の趣味。
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </React.StrictMode>,
);
