import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import { Header } from './components/header';
import { PageHeading } from './components/pageheading';
import { BreadCrumb } from './components/breadcrumb';
import { Footer } from './components/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BreadCrumb pageTitle='イントロダクション' pagePath='/intro/' />
    <PageHeading pageTitle='イントロダクション' />
    <main className='o-container o-container:main'>
      <h2 className='c-heading c-heading:textCenter'>仮面ライター10年目？</h2>
      <p className='c-tagline'>10年経っても一言で纏められない「変なやつ」</p>
      <article className='c-entry'>
        <p>
          2013年4月に創業してから早9年。10年目突入とは、我ながらビックリ。
          <br />
          Web業界に入りたての2年間も含めれば、いい加減に何らかのサービスなりブランドなり会社なりを立ち上げていてもおかしくない頃なのに、いまだに何をやっているのか自他共によく分からないまま、マイペースに低空飛行を継続中。
        </p>
        <p>
          何者かになりたかったのに、誰かに決めつけられることを拒み続けたために、<b>「何者でもない自分」</b>
          で在り続けている。
        </p>
        <p>
          何者でもない自分と自分らしさにしがみついて、<b>「個性の味方」</b>
          を貫き通す。「みんな」も「普通」も居心地が悪い、不器用で頑固な<b>「変なやつ」と共に在りたい。</b>
        </p>
      </article>
    </main>
    <Footer />
  </React.StrictMode>,
);
