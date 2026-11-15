import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, MessageCircle, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../ui/SocialIcons';
import { siteConfig } from '../../data/siteConfig';
const options = ['Group training', 'One-to-one', 'Zumba', 'Not sure yet'];
export function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Fitness enquiry from ${form.get('name')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nPhone: ${form.get('phone')}\nEmail: ${form.get('email')}\nInterested in: ${form.get('program')}\n\nMessage:\n${form.get('message')}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <section className="contact-section" id="contact"><div className="section contact-inner"><div className="section-kicker" data-reveal><span>07 / YOUR NEXT HOUR</span><span>WE’RE IN JAMALIA, PERAMBUR</span></div><div className="contact-grid"><div className="contact-copy" data-reveal><p className="eyebrow">LET’S START WITH A HELLO</p><h2>MAKE THE<br/><i>FIRST MOVE.</i></h2><p>Have a question about training, timings or what to bring? Talk directly with the studio.</p><a className="contact-phone" href={siteConfig.phoneHref}>{siteConfig.phone}<ArrowUpRight size={19}/></a><a className="contact-email" href={siteConfig.emailHref}>{siteConfig.email}</a><div className="contact-social"><a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a><a href={siteConfig.instagram} target="_blank" rel="noreferrer"><InstagramIcon width={16} height={16}/> Instagram</a><a href={siteConfig.facebook} target="_blank" rel="noreferrer"><FacebookIcon width={16} height={16}/> Facebook</a><a href={siteConfig.emailHref}><Mail size={16}/> Email</a></div></div>
  <form className="enquiry-form" onSubmit={submit} data-reveal><div className="form-heading"><span>01 — SEND AN ENQUIRY</span><span>WE’LL OPEN YOUR EMAIL APP</span></div><label>Name<input name="name" required autoComplete="name" placeholder="Your name"/></label><div className="form-two"><label>Phone<input name="phone" type="tel" required autoComplete="tel" pattern="[+0-9 ()-]{7,}" placeholder="Your number"/></label><label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com"/></label></div><label>Interested in<select name="program" defaultValue=""><option value="" disabled>Select a format</option>{options.map(o=><option key={o}>{o}</option>)}</select></label><label>Message<textarea name="message" required rows={3} placeholder="What would you like to know?"/></label><button className="button button-lime form-submit" type="submit">{sent ? <>Email app opened <Check size={16}/></> : <>Prepare enquiry <ArrowUpRight size={16}/></>}</button><p className="form-note">This form opens your email application with the details filled in. Your enquiry is not stored on this website.</p></form></div>
  <div className="contact-address"><span>FIND THE STUDIO</span><p>{siteConfig.location}</p><span>FULL STREET ADDRESS TO CONFIRM</span></div></div></section>;
}
