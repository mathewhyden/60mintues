import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { galleryCategories, studioMedia } from '../../data/gallery';
import { siteConfig } from '../../data/siteConfig';
export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    function keydown(e: KeyboardEvent) {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((i) => i === null ? null : (i + 1) % studioMedia.length);
      if (e.key === 'ArrowLeft') setActive((i) => i === null ? null : (i - 1 + studioMedia.length) % studioMedia.length);
    }
    window.addEventListener('keydown', keydown); document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', keydown); document.body.style.overflow = ''; };
  }, [active]);
  return <section className="section gallery-section" id="gallery">
    <div className="section-kicker" data-reveal><span>04 / A CLOSER LOOK</span><span>THE STUDIO, AS IT IS</span></div>
    <div className="section-title-row" data-reveal><h2>REAL WORK.<br/><i>REAL PLACE.</i></h2><p>Photos from the studio’s public business galleries. Select any image to see it larger.</p></div>
    <div className="gallery-layout actual-gallery">
      {studioMedia.map((item, index) => <button className={`gallery-photo gallery-photo-${index + 1}`} key={item.src} onClick={() => setActive(index)} aria-label={`View ${item.label}`} data-reveal>
        <img src={item.src} alt={item.alt} loading="lazy"/><span className="photo-label"><strong>{item.label}</strong><small>{item.category} · {item.source}</small></span>
      </button>)}
    </div>
    <div className="gallery-tags">{galleryCategories.map((c) => <span key={c}>{c}</span>)}</div>
    <div className="social-strip"><div><span className="eyebrow">FOLLOW THE STUDIO</span><h3>In good company.</h3></div><a className="text-link" href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15}/></a><a className="text-link" href={siteConfig.facebook} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={15}/></a></div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Studio photo viewer" onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
      <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close photo viewer"><X/></button>
      <button className="lightbox-arrow lightbox-prev" onClick={() => setActive((active - 1 + studioMedia.length) % studioMedia.length)} aria-label="Previous photo"><ArrowLeft/></button>
      <figure><img src={studioMedia[active].src} alt={studioMedia[active].alt}/><figcaption>{studioMedia[active].label} <span>{studioMedia[active].source}</span></figcaption></figure>
      <button className="lightbox-arrow lightbox-next" onClick={() => setActive((active + 1) % studioMedia.length)} aria-label="Next photo"><ArrowRight/></button>
    </div>}
  </section>;
}
