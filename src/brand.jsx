import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';
import { MyImage } from './components/myimage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCode } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='ブランドポリシー' pagePath='/brand/' />
    <PageHeading pageTitle='ブランドポリシー' />
    <main className='o-container o-container:main'>
      <h2 className='c-min-heading'>10年目のブランドメッセージ</h2>
      <p className='c-heading c-heading:textCenter u-mb-l'>
        "Beyond the Ignorance"
        <br />
        （無知の彼方へ）
      </p>
      <h2 className='c-min-heading'>10年目のブランドミッション</h2>
      <p className='c-heading c-heading:textCenter u-mb-l'>
        <b>変わり者の希望であり続ける</b>
      </p>
      <div className='c-entry'>
        <p>
          新たな時代を築くのは、変わり者の熱意と狂気。
          <br />
          「変」を貫く怖さと孤独に寄り添い、「変」であるからできることを示していく。
          <br />
          「変」でいてもいい安心感と、「変」であり続ける勇気を届けたい。
        </p>
        <p>名もなき一人の変人として、燦然と輝く大きな存在を目指したい。</p>
      </div>
      <h2 className='c-min-heading'>10年目の価値観</h2>
      <dl className='o-stack o-stack:values'>
        <dt className='c-values__title'>1.無知の縁取り</dt>
        <dd className='c-values__content'>「知らない」を想像するための境界をつかむ</dd>
      </dl>
      <dl className='o-stack o-stack:values'>
        <dt className='c-values__title'>2.行間と想像</dt>
        <dd className='c-values__content'>分かりやすくて分かりにくい、豊かな情報体験</dd>
      </dl>
      <dl className='o-stack o-stack:values'>
        <dt className='c-values__title'>3.エンターテイナーたれ</dt>
        <dd className='c-values__content'>自分から楽しむ、周囲も社会も楽しませる</dd>
      </dl>
    </main>
    <Footer />
  </React.StrictMode>,
);
