import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Programs } from './components/sections/Programs';
import { CoachPlans } from './components/sections/CoachPlans';
import { FirstVisit } from './components/sections/FirstVisit';
import { Trainers } from './components/sections/Trainers';
import { Gallery } from './components/sections/Gallery';
import { Posters } from './components/sections/Posters';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';
import { MessageCircle } from 'lucide-react';
import { TestimonialsPage } from './components/sections/TestimonialsPage';
import { initReveals } from './animations/reveal';
import { siteConfig } from './data/siteConfig';
import './styles/global.css';
export default function App(){
  useEffect(()=>initReveals(),[]);
  useEffect(()=>{
    const script=document.createElement('script'); script.type='application/ld+json'; script.text=JSON.stringify({ '@context':'https://schema.org','@type':'HealthClub','name':siteConfig.name,'url':'https://60minutesfitnessstudio.co.in/','telephone':siteConfig.phone,'email':siteConfig.email,'address':{'@type':'PostalAddress','addressLocality':'Perambur / Jamalia','addressRegion':'Tamil Nadu','addressCountry':'IN'},'sameAs':[siteConfig.instagram,siteConfig.facebook]}); document.head.append(script); return ()=>script.remove();
  },[]);
  const isTestimonialsPage = window.location.pathname.replace(/\/+$/, '') === '/testimonials';
  if(isTestimonialsPage) return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><TestimonialsPage/></main><a className="whatsapp-float" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with 60 Minutes Fitness Studio on WhatsApp"><MessageCircle size={22}/><span>Chat on WhatsApp</span></a><Footer/></>;
  return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Hero/><div className="ticker" aria-label="60 Minutes Fitness Studio"><div>MOVE WITH PURPOSE <b>✳</b> FIND YOUR RHYTHM <b>✳</b> PERAMBUR, CHENNAI <b>✳</b> MOVE WITH PURPOSE <b>✳</b> FIND YOUR RHYTHM <b>✳</b> PERAMBUR, CHENNAI <b>✳</b></div></div><About/><Programs/><CoachPlans/><FirstVisit/><Trainers/><Gallery/><Posters/><Reviews/><Contact/></main><a className="whatsapp-float" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with 60 Minutes Fitness Studio on WhatsApp"><MessageCircle size={22}/><span>Chat on WhatsApp</span></a><Footer/></>;
}
