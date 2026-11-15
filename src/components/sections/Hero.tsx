import { ArrowDown, ArrowUpRight, Dumbbell } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
export function Hero() {
  return <section className="hero" id="home">
    <div className="hero-media hero-photo"><img src="/assets/gallery/interior-owner-google-jul-2026.jpg" alt="Inside 60 Minutes Fitness Studio in Perambur" fetchPriority="high" /></div>
    <div className="hero-shade" />
    <div className="hero-photo-orbit" aria-label="Fitness training photography">
      <div className="orbit-ring" />
      <figure className="orbit-photo orbit-photo-main"><img src="/assets/programs/crossfit.jpg" alt="Functional gym training"/><figcaption>TRAIN WITH INTENT <Dumbbell size={13}/></figcaption></figure>
      <figure className="orbit-photo orbit-photo-small"><img src="/assets/programs/strength-training.jpg" alt="Strength training session"/><figcaption>GET STRONGER</figcaption></figure>
      <span className="orbit-stamp"><b>60</b><small>MINUTES<br/>MOVE CLUB</small></span>
    </div>
    <div className="hero-copy">
      <p className="eyebrow"><span className="live-dot"/> PERAMBUR · CHENNAI</p>
      <h1>MAKE<br/><i>TIME MOVE.</i></h1>
      <p className="hero-intro">A neighborhood fitness studio for showing up, finding your rhythm, and building a practice that’s yours.</p>
      <div className="hero-actions"><a className="button button-lime" href="#programs">Find your training <ArrowUpRight size={17}/></a><a className="button button-outline" href={siteConfig.phoneHref}>Call the studio</a></div>
    </div>
    <div className="hero-bottom"><span>60 MINUTES FITNESS STUDIO</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={14}/></a><span>CHENNAI, TN</span></div>
    <div className="hero-number" aria-hidden="true">60</div>
  </section>;
}
