import React from 'react';

export const IndexNews = () => {
  return (
    <aside className='o-box o-box:news'>
      <h2 className='c-heading'>Infomation</h2>
      <ul className='o-stack o-stack:newsList'>
        <li className='c-news-item'>
          <time className='c-time' dateTime='2022-00-00'>
            2022.00.00
          </time>
          <a href='#' className='c-link'>
            ニュースタイトル
          </a>
        </li>
        <li className='c-news-item'>
          <time className='c-time' dateTime='2022-00-00'>
            2022.00.00
          </time>
          <a href='#' className='c-link'>
            ニュースタイトル
          </a>
        </li>
        <li className='c-news-item'>
          <time className='c-time' dateTime='2022-00-00'>
            2022.00.00
          </time>
          <a href='#' className='c-link'>
            ニュースタイトル
          </a>
        </li>
        <li className='c-news-item'>
          <time className='c-time' dateTime='2022-00-00'>
            2022.00.00
          </time>
          <a href='#' className='c-link'>
            ニュースタイトル
          </a>
        </li>
        <li className='c-news-item'>
          <time className='c-time' dateTime='2022-00-00'>
            2022.00.00
          </time>
          <a href='#' className='c-link'>
            ニュースタイトル
          </a>
        </li>
      </ul>
      <a href='#' className='c-btn c-btn:newsList'>
        全てのニュースはこちら
      </a>
    </aside>
  );
};
