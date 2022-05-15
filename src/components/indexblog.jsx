import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { MyImage } from './myimage';

export const IndexBlog = () => {
  return (
    <>
      <h2 className='c-heading'>Topics</h2>
      <ul className='o-grid o-grid:blogList'>
        <li>
          <a href='#'>
            <MyImage className='o-frame' src='/img/thumb.png' alt='コンテンツタイトル' />
            <span className='c-topic-title'>コンテンツタイトル</span>
          </a>
          <span>
            <span className='o-has-icon o-has-icon:cat'>
              <FontAwesomeIcon icon={faFolderOpen} />
              <a href='#' className='c-link c-link:catSingle'>
                カテゴリー
              </a>
            </span>
            <span className='c-memo'>
              読了見込 3分・<time dateTime='2022-00-00'>3日前</time>
            </span>
          </span>
        </li>
        <li>
          <a href='#'>
            <MyImage className='o-frame' src='/img/thumb.png' alt='コンテンツタイトル' />
            <span className='c-topic-title'>コンテンツタイトル</span>
          </a>
          <span>
            <span className='o-has-icon o-has-icon:cat'>
              <FontAwesomeIcon icon={faFolderOpen} />
              <a href='#' className='c-link c-link:catSingle'>
                カテゴリー
              </a>
            </span>
            <span className='c-memo'>
              読了見込 3分・<time dateTime='2022-00-00'>3日前</time>
            </span>
          </span>
        </li>
        <li>
          <a href='#'>
            <MyImage className='o-frame' src='/img/thumb.png' alt='コンテンツタイトル' />
            <span className='c-topic-title'>コンテンツタイトル</span>
          </a>
          <span>
            <span className='o-has-icon o-has-icon:cat'>
              <FontAwesomeIcon icon={faFolderOpen} />
              <a href='#' className='c-link c-link:catSingle'>
                カテゴリー
              </a>
            </span>
            <span className='c-memo'>
              読了見込 3分・<time dateTime='2022-00-00'>3日前</time>
            </span>
          </span>
        </li>
      </ul>
      <a href='#' className='c-btn c-btn:topicList'>
        Topics 一覧
      </a>
    </>
  );
};
