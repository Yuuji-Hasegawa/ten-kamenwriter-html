import React from 'react';

export const NotfoundInner = () => {
  return (
    <div className='c-entry'>
      <p>
        お探しのページは見つかりませんでした。
        <br />
        お探しのページは、
      </p>
      <ul className='c-list c-list:inner'>
        <li>すでに削除されている</li>
        <li>公開期間が終わっている</li>
        <li>アクセスしたアドレスが異なっている</li>
      </ul>
      <p>
        などの理由で見つかりませんでした。
        <br />
        引き続き、このサイトをご利用いただく場合は、
      </p>
      <ul className='c-list c-list:inner'>
        <li>
          <a className='c-link c-link:inline' href='#'>
            トップページ
          </a>
          から探す
        </li>
        <li>検索し直す</li>
      </ul>
      <p>など、ご利用ください。</p>
      <a className='c-btn c-btn:gohome' href='#'>
        トップページへ戻る
      </a>
    </div>
  );
};
