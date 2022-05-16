import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const BreadCrumb = ({ pageTitle, pagePath }) => {
  return (
    <nav className='c-bread-list__outer' aria-label='Breadcrumb'>
      <ol className='c-bread-list'>
        <li className='c-bread-list__item'>
          <a href='./' className='c-link c-link:breadcrumb'>
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li className='c-bread-list__item'>
          <a href={pagePath} className='c-link c-link:breadcrumb' aria-current='page'>
            {pageTitle}
          </a>
        </li>
      </ol>
    </nav>
  );
};
