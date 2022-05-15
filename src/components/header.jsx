import React, { useState, useCallback, useEffect } from 'react';
import { MyImage } from './myimage';
import { Search } from './search';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open]);
  useEffect(() => {
    open ? document.body.classList.add('fixed') : document.body.classList.remove('fixed');
  }, [open]);
  return (
    <>
      <header className='o-container o-container:header'>
        <div className='o-cluster o-cluster:header'>
          <button
            className='c-menu-btn'
            type='button'
            onClick={toggle}
            aria-label={open ? 'menu close' : 'menu open'}
            aria-controls='sidebar'
            aria-expanded={open}
          >
            <span className='c-menu-btn__bars'></span>
          </button>
          <a href='./' className='c-logo'>
            <MyImage className='o-frame o-frame:logo' src='/img/logo.svg' alt='仮面ライター' />
          </a>
        </div>
        <Search />
      </header>
      <div id='sidebar' className={open ? 'c-sidebar c-sidebar:is-open' : 'c-sidebar'} aria-hidden={!open}>
        <header className='o-container o-container:header'>
          <div className='o-cluster o-cluster:header'>
            <button
              className='c-menu-btn'
              type='button'
              onClick={toggle}
              aria-label={open ? 'menu close' : 'menu open'}
              aria-controls='sidebar'
              aria-expanded={open}
            >
              <span className='c-menu-btn__bars'></span>
            </button>
            <a href='./' className='c-logo'>
              <MyImage className='o-frame o-frame:logo' src='/img/logo.svg' alt='仮面ライター' />
            </a>
          </div>
        </header>
        <div className='o-cover o-cover:sidebar'>
          <div className='o-box o-box:sidebar'>
            <h2 className='c-heading c-heading:sidebar'>カテゴリー</h2>
            <div class='o-stack'>
              <a className='c-link c-link:cat'>ダミーテキスト</a>
              <a className='c-link c-link:cat'>ダミーテキスト</a>
              <a className='c-link c-link:cat'>ダミーテキスト</a>
              <a className='c-link c-link:cat'>ダミーテキスト</a>
              <a className='c-link c-link:cat'>ダミーテキスト</a>
            </div>
          </div>
          <div className='o-box o-box:sidebar'>
            <h2 className='c-heading c-heading:sidebar'>タグ</h2>
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
            </div>
          </div>
          <nav className='o-stack o-stack:nav'>
            <a href='#' className='c-link c-link:nav'>
              イントロダクション
            </a>
            <a href='#' className='c-link c-link:nav'>
              仮面ライター
            </a>
            <a href='#' className='c-link c-link:nav'>
              これまでの記録
            </a>
          </nav>
          <div className='o-box o-box:sidebar'>
            <h2 className='c-heading c-heading:sidebar'>関連サイト</h2>
            <div class='o-stack'>
              <a className='c-link c-link:cat'>シン・仮面ライター</a>
              <a className='c-link c-link:cat'>Blue B Nose</a>
              <a className='c-link c-link:cat'>NXZ</a>
            </div>
          </div>
          <footer className='c-bottom c-bottom:sidebar'>
            <nav className='o-cluster o-cluster:footer'>
              <a href='#' className='c-link c-link:fnav'>
                会社情報
              </a>
              <a href='#' className='c-link c-link:fnav'>
                利用規約
              </a>
              <a href='#' className='c-link c-link:fnav'>
                プライバシーポリシー
              </a>
              <a href='#' className='c-link c-link:fnav'>
                お問い合わせ
              </a>
            </nav>
            <div className='c-copyright'>©︎ kamenwriter.com</div>
          </footer>
        </div>
      </div>
      <div className={open ? 'c-sidebar-bg c-sidebar-bg:is-open' : 'c-sidebar-bg'} onClick={toggle}></div>
    </>
  );
};
