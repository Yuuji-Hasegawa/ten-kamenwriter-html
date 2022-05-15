import React from 'react';
import { MyImage } from './myimage';
export const Logo = (props) => {
  let modifier = props.position;
  return (
    <a href='./' className={'o-has-icon o-has-icon:' + modifier}>
      <span className={'o-has-icon__logo-icon o-has-icon__logo-icon:' + modifier}>
        <MyImage className='o-frame o-frame:logo' src='/img/logo.svg' alt='ロゴ' />
      </span>
      <span className={'o-has-icon__logo-label o-has-icon__logo-label:' + modifier}>仮面ライター</span>
    </a>
  );
};
