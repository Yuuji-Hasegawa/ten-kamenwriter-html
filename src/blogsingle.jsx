import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faList, faCaretDown, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faClock, faFile } from '@fortawesome/free-regular-svg-icons';
import { MyImage } from './components/myimage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='ダミー記事' pagePath='/blog/single' />
    <PageHeading pageTitle='ダミー記事' />
    <main className='o-container o-container:main'>
      <article className='c-entry c-entry:single'>
        <header className='o-grid o-grid:headAuthor'>
          <a href='#'>
            <MyImage className='o-frame o-frame:square' src='/img/profile.png' alt='プロフィール画像' />
          </a>
          <div className='o-stack o-stack:xxs'>
            <a className='c-link' href='#'>
              長谷川　雄治
            </a>
            <div className='o-cluster'>
              <time className='o-has-icon o-has-icon:time' dateTime='2022-00-00'>
                <FontAwesomeIcon icon={faClock} />
                2022.00.00
              </time>
              <time className='o-has-icon o-has-icon:time' dateTime='2022-00-00'>
                <FontAwesomeIcon icon={faArrowRotateRight} />
                2022.00.00
              </time>
            </div>
          </div>
        </header>
        <div className='c-insert-img'>
          <MyImage className='o-frame' src='/img/thumb.png' alt='記事タイトル' />
        </div>
        <div>
          <div className='o-box o-box:redume'>
            <button className='o-has-icon o-has-icon:redume' type='button'>
              <FontAwesomeIcon icon={faList} />
              目次
              <span className='c-redume-marker'>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            <ul className='c-list c-list:redume'>
              <li>
                <a className='c-link' href='#'>
                  リンク
                </a>
              </li>
              <li>
                <a className='c-link' href='#'>
                  リンク
                </a>
              </li>
              <li>
                <a className='c-link' href='#'>
                  リンク
                </a>
              </li>
              <li>
                <a className='c-link' href='#'>
                  リンク
                </a>
              </li>
            </ul>
          </div>
          ダミー本文
        </div>
        <div className='o-stack o-stack:xxs'>
          <a href='#' className='c-link:bottomCat'>
            <FontAwesomeIcon icon={faFolderOpen} />
            ダミーカテゴリー
          </a>
          <div className='o-cluster'>
            <a href='#' className='c-link c-link:tag'>
              ダミータグ
            </a>
            <a href='#' className='c-link c-link:tag'>
              ダミータグ
            </a>
            <a href='#' className='c-link c-link:tag'>
              ダミータグ
            </a>
            <a href='#' className='c-link c-link:tag'>
              ダミータグ
            </a>
            <a href='#' className='c-link c-link:tag'>
              ダミータグ
            </a>
          </div>
        </div>
        <div className='c-input-copy'>
          <input
            className='c-input c-input:share'
            type='text'
            value='この記事のURLこの記事のURLこの記事のURLこの記事のURL'
            readonly='true'
          />
          <button className='c-btn c-btn:copy'>コピー</button>
        </div>
        <footer id='author' className='o-box o-box:bottom-author'>
          <div className='o-switcher o-switcher:author'>
            <div className='c-author-pict'>
              <MyImage className='o-frame o-frame:square' src='/img/profile.png' alt='プロフィール画像' />
            </div>
            <dl className='o-stack o-stack:xs'>
              <dt className='c-author-name'>長谷川　雄治</dt>
              <dd>
                自己紹介
                <div className='o-cluster o-cluster:sns'>
                  <a href='#' className='c-link c-link:sns' target='_blank' rel='noopener'>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href='#' className='c-link c-link:sns' target='_blank' rel='noopener'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href='#' className='c-link c-link:sns' target='_blank' rel='noopener'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href='#' className='c-link c-link:sns' target='_blank' rel='noopener'>
                    <FontAwesomeIcon icon={faFile} />
                  </a>
                </div>
              </dd>
            </dl>
          </div>
        </footer>
      </article>
    </main>
    <Footer />
  </React.StrictMode>,
);
