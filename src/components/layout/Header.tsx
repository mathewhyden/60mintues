import { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../ui/SocialIcons';
import { siteConfig } from '../../data/siteConfig';
const links = [['Studio', '/#about'], ['Training', '/#programs'], ['Plans', '/#coach-plans'], ['First visit', '/#first-visit'], ['People', '/#trainers'], ['Testimonials', '/testimonials/'], ['Contact', '/#contact']];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="60 Minutes Fitness Studio home"><img src="/assets/brand/60-minutes-fitness-studio-logo-transparent.png" alt="60 Minutes Fitness Studio" /></a>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{links.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}<div className="nav-socials"><a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon width={16} height={16}/></a><a href={siteConfig.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon width={16} height={16}/></a><a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={16}/></a></div><a className="nav-cta" href={siteConfig.phoneHref}>Talk to us <ArrowUpRight size={15}/></a></nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
  </header>;
}
