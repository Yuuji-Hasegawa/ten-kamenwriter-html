import { useInView } from 'react-intersection-observer';

export const MyImage = ({ className, src, hq, alt }) => {
  const [ref, inview] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const dummySrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  let pictClass = className ? className : 'o-frame';
  let imgAlt = alt ? alt : '';
  let imgSrc = src ? src : '';
  let srcSet = hq ? `${imgSrc} 1x, ${hq} 2x` : '';
  let imgPath = imgSrc.replace(/\.(svg|gif|png|jpe?g)$/i, '');
  let hqPath = hq ? hq.replace(/\.(svg|gif|png|jpe?g)$/i, '') : '';
  let avif = src.match(/\.(png|jpe?g)$/i) ? `${imgPath}.avif` : '';
  let webp = src.match(/\.(png|jpe?g)$/i) ? `${imgPath}.webp` : '';
  let avifHq = hq ? `${hqPath}.avif` : '';
  let webpHq = hq ? `${hqPath}.webp` : '';
  let avifSrc = avifHq ? `${avif} 1x, ${avifHq} 2x` : avif;
  let webpSrc = webpHq ? `${webp} 1x, ${webpHq} 2x` : webp;

  let switchSrc = inview ? imgSrc : dummySrc;
  let switchSrcSet = inview ? srcSet : dummySrc;
  let switchWebp = inview ? webpSrc : dummySrc;
  let switchAvif = inview ? avifSrc : dummySrc;

  return (
    <picture className={pictClass} inview={inview.toString()}>
      {avif && <source srcSet={switchAvif} type='image/avif' />}
      {webp && <source srcSet={switchWebp} type='image/webp' />}
      {hq && (
        <img src={switchSrc} srcSet={switchSrcSet} width='100%' height='100%' decoding='async' alt={imgAlt} ref={ref} />
      )}
      {!hq && <img src={switchSrc} width='100%' height='100%' decoding='async' alt={imgAlt} ref={ref} />}
    </picture>
  );
};
