import React from 'react';
import { MyImage } from './myimage';

export const Hero = () => {
  return (
    <div className='c-hero'>
      <div className='c-hero_bg'>
        <MyImage className='o-frame o-frame:logo' src='/img/logo.svg' alt='ロゴ' />
      </div>
      <div className='c-hero_front'>
        <h1 className='c-hero_main'>仮面ライター</h1>
        <p className='c-hero_tagline'>since 2013</p>
      </div>
    </div>
  );
};
