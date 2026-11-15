import { ArrowUpRight, Clock3, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const faqs = [
  { q: 'I’m new to fitness. Can I still get started?', a: 'Yes. Tell the team about your experience, comfort level, and goals before choosing a format. They can explain which currently available option may suit you.' },
  { q: 'What training formats are listed?', a: 'The studio lists group and one-to-one indoor training. Public listings also mention options such as Zumba, aerobics, CrossFit, yoga, strength work, and cardio. Ask which sessions are running now.' },
  { q: 'How much does it cost, and what are the timings?', a: 'Fees, batches, and timings can change. Message or call the studio for the current schedule and membership options before visiting.' },
  { q: 'What should I bring for my first session?', a: 'Ask the studio what your chosen session needs. Comfortable workout clothes and water are a sensible starting point; confirm any equipment or footwear requirements with the team.' },
  { q: 'Where is the studio?', a: 'The studio is in the Jamalia / Perambur area of Chennai. Contact the team for the exact address and directions before you set out.' },
];

export function FirstVisit() {
  return <section className="section first-visit-section" id="first-visit">
    <div className="section-kicker" data-reveal><span>03 / YOUR FIRST VISIT</span><span>START WITH A CONVERSATION</span></div>
    <div className="first-visit-heading" data-reveal>
      <div><p className="eyebrow">A SIMPLE WAY TO BEGIN</p><h2>SHOW UP.<br/><i>WE’LL TAKE IT FROM THERE.</i></h2></div>
      <p>Every starting point is different. Share what you’re aiming for, ask what’s currently available, and choose a first step that feels right for you.</p>
    </div>
    <div className="visit-grid">
      <div className="visit-visual" data-reveal>
        <img src="/assets/gallery/interior-owner-google-jul-2026.jpg" alt="The 60 Minutes Fitness Studio training space in Perambur" loading="lazy" />
        <div className="visit-photo-shade" />
        <div className="visit-photo-label"><span>YOUR NEXT HOUR STARTS HERE</span><strong>COME AS<br/>YOU ARE.</strong><small>JAMALIA · PERAMBUR · CHENNAI</small></div>
        <div className="visit-photo-mark"><span>60</span><small>MINUTES<br/>TO MOVE</small></div>
      </div>
      <div className="visit-steps" data-reveal>
        <article><span className="visit-step-number">01</span><div><h3>Tell us your goal</h3><p>Build strength, get moving, explore a class, or talk through a one-to-one option.</p></div><MessageCircle size={19}/></article>
        <article><span className="visit-step-number">02</span><div><h3>Check what’s running</h3><p>Ask about current formats, available trainers, session times, fees, and any equipment to bring.</p></div><Clock3 size={19}/></article>
        <article><span className="visit-step-number">03</span><div><h3>Plan your first visit</h3><p>Confirm the exact address and choose a time with the studio team before heading over.</p></div><MapPin size={19}/></article>
        <a className="button button-lime visit-contact" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowUpRight size={16}/></a>
        <p className="visit-note"><ShieldCheck size={15}/> No pressure to know everything before you begin. Just ask.</p>
      </div>
    </div>
    <div className="faq-block" id="faq">
      <div className="faq-heading" data-reveal><span className="eyebrow">GOOD TO KNOW</span><h3>FIRST VISIT<br/><i>QUESTIONS.</i></h3><p>Details like fees and class times can change. The studio can confirm what’s current.</p></div>
      <div className="faq-list">{faqs.map((faq, i) => <details className="faq-item" key={faq.q} data-reveal><summary><span>{String(i + 1).padStart(2, '0')}</span><strong>{faq.q}</strong><b aria-hidden="true">+</b></summary><p>{faq.a}</p></details>)}</div>
    </div>
  </section>;
}
