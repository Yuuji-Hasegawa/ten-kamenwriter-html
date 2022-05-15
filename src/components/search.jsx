import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Search = () => {
  return (
    <form className='o-paste'>
      <input className='c-search' name='s' id='s' type='text' placeholder='キーワードを入力' />
      <label className='c-search__label' htmlFor='s'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
    </form>
  );
};
