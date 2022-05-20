import React from 'react';
import { MyImage } from './myimage';

export const Footer = () => {
  return (
    <div className='c-bottom'>
      <div className='o-grid o-grid:sitemap'>
        <span className='o-stack o-stack:sitemap'>
          <a href='#' className='c-link c-link:mapHead'>
            イントロダクション
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            初めての方へ
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            プロフィール
          </a>
        </span>
        <span className='o-stack o-stack:sitemap'>
          <a href='#' className='c-link c-link:mapHead'>
            仮面ライターとは？
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            サービスのご案内
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            会社情報
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            ブランドポリシー
          </a>
        </span>
        <span className='o-stack o-stack:sitemap'>
          <a href='#' className='c-link c-link:mapHead'>
            これまでの記録
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            制作事例
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            取引実績
          </a>
          <a href='#' className='c-link c-link:mapChild'>
            お客様の声
          </a>
        </span>
      </div>
      <h2 className='c-related-title'>関連サイト</h2>
      <div className='o-cluster o-cluster:related'>
        <a href='#' className='c-link'>
          シン・仮面ライター
        </a>
        <a href='#' className='c-link'>
          Blue B Nose
        </a>
        <a href='#' className='c-link'>
          NXZ
        </a>
      </div>
      <a href='./' className='c-logo c-logo:footer'>
        <MyImage className='o-frame o-frame:logo' src='/img/logo.svg' alt='仮面ライター' />
      </a>
    </div>
  );
};
