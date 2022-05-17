import React from 'react';

export const InqInner = () => {
  return (
    <article className='c-entry'>
      <p>仮面ライターにご質問、ご要望などございましたら、下記のお問い合わせフォームから、お気軽にお寄せください。</p>
      <h2 className='c-min-heading'>お問い合わせフォーム</h2>
      <dl className='c-table'>
        <dt className='c-table__title'>お名前</dt>
        <dd className='c-table__content'>
          <input className='c-input' type='text' placeholder='例）お名前' />
        </dd>
        <dt className='c-table__title c-table__title:require'>メールアドレス</dt>
        <dd className='c-table__content'>
          <input className='c-input' type='text' placeholder='例）info@examples.com' />
        </dd>
        <dt className='c-table__title c-table__title:require'>お問い合わせ内容</dt>
        <dd className='c-table__content'>
          <textarea className='c-input' placeholder='お気軽にご入力ください'></textarea>
        </dd>
      </dl>
      <label className='o-grid o-grid:accept'>
        <input className='c-checkbtn' type='checkbox' />
        <a className='c-link c-link:inline' href='/privacy-policy/' target='_blank' rel='noopener'>
          プライバシーポリシー
        </a>
        に同意する
      </label>
      <button className='c-btn c-btn:submit' type='submit'>
        送信
      </button>
      <ul className='o-stack o-stack:annouce'>
        <li>調査等のため、返信にお時間を頂くことがございます。予めご了承ください。</li>
        <li>
          万が一、一週間経っても返信がない場合は大変お手数ですが、
          <a className='c-link c-link:inline' href='mailto:info@kamenwriter.com'>
            info@kamenwriter.com
          </a>{' '}
          までご連絡ください。
        </li>
      </ul>
    </article>
  );
};
