import React from 'react';
import { MyImage } from './myimage';

export const PageHeading = ({ pageTitle }) => {
  let title = pageTitle ? pageTitle : '';
  return (
    <div className='c-hero'>
      <div className='c-hero_bg'>
        <MyImage className='o-frame o-frame:logo' src='/img/logo.svg' alt='ロゴ' />
      </div>
      <div className='c-hero_front'>
        <h1 className='c-hero_main c-hero_main:page'>{title}</h1>
      </div>
    </div>
  );
};
