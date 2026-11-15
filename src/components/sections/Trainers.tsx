import { ArrowUpRight } from 'lucide-react';
import { trainers } from '../../data/trainers';
export function Trainers() { return <section className="section trainers-section" id="trainers">
  <div className="section-kicker" data-reveal><span>03 / THE COACH</span><span>PERSONAL GUIDANCE. YOUR PACE.</span></div>
  <div className="section-title-row" data-reveal><h2>MEET YOUR<br/><i>COACH.</i></h2><p>Start a conversation about your goals, experience, and the training options available at the studio.</p></div>
  <div className="trainer-grid trainer-single">{trainers.map((t) => <article className="trainer-card" key={t.name} data-reveal><div className="trainer-portrait"><img src={t.image} alt={`Portrait of ${t.name}`} loading="lazy"/><span className="trainer-photo-tag">60 MINUTES · COACH</span></div><div className="trainer-meta"><div><span>{t.role}</span><h3>{t.name}</h3></div><span className="trainer-pending">TRAINING · PERAMBUR</span></div></article>)}</div>
  <a className="text-link trainer-cta" href="#contact">Ask Master Godwin about training <ArrowUpRight size={15}/></a>
</section>; }
