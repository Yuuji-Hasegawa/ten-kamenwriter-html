import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const NewsInner = () => {
  return (
    <div className='c-list-outer'>
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
      <nav className='c-pagination' aria-label='Pagination'>
        <ol className='o-grid o-grid:pagination'>
          <li>
            <a className='c-btn c-btn:pager' aria-label='Previous'>
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
          </li>
          <li>
            <a className='c-btn c-btn:pager' aria-label='Goto Page 1' href='#'>
              1
            </a>
          </li>
          <li>
            <a className='c-btn c-btn:pager' aria-label='Goto Page 1' href='#'>
              2
            </a>
          </li>
          <li>
            <a className='c-btn c-btn:pager' aria-label='Current Page' aria-current='true' href='#'>
              3
            </a>
          </li>
          <li>
            <a className='c-btn c-btn:pager' aria-label='Goto Page 1' href='#'>
              4
            </a>
          </li>
          <li>
            <a className='c-btn c-btn:pager' aria-label='Goto Page 1' href='#'>
              5
            </a>
          </li>
          <li>
            <a className='c-btn c-btn:pager' aria-label='Next'>
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};
