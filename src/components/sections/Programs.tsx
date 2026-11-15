import {
  Activity,
  ArrowUpRight,
  Dumbbell,
  HeartPulse,
  Music2,
  Target,
  UserRound,
  Users,
  Waves,
} from 'lucide-react';
import { programs, type StudioService } from '../../data/programs';

const serviceIcons = {
  group: Users,
  personal: UserRound,
  dance: Music2,
  aerobics: Activity,
  crossfit: Dumbbell,
  yoga: Waves,
  strength: Dumbbell,
  goals: Target,
  cardio: HeartPulse,
};

function ServiceCard({ service }: { service: StudioService }) {
  const Icon = serviceIcons[service.icon];
  return (
    <article className="service-card" data-reveal>
      <div className="service-card-image">
        <img src={service.image} alt={service.imageAlt} loading="lazy" />
        <span>Fitness photo</span>
      </div>
      <div className="service-card-content">
        <div className="service-card-top">
          <span className="program-number">{service.number}</span>
          <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <span className="program-type">{service.type}</span>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <span className="service-availability">Confirm current availability</span>
      </div>
    </article>
  );
}

export function Programs() {
  return (
    <section className="section programs-section" id="programs">
      <div className="section-kicker" data-reveal>
        <span>02 / TRAIN YOUR WAY</span>
        <span>FORMATS & FITNESS OPTIONS</span>
      </div>
      <div className="section-title-row" data-reveal>
        <h2>FIND YOUR<br/><i>TRAINING STYLE.</i></h2>
        <p>Explore the formats and services mentioned in public studio listings. Call to check today’s classes, timings, fees, and equipment.</p>
      </div>
      <div className="service-facts" data-reveal>
        <span><Users size={15}/> Group format listed</span>
        <span><UserRound size={15}/> One-to-one format listed</span>
        <span><Activity size={15}/> Indoor training listed</span>
      </div>
      <div className="service-grid">
        {programs.map((service) => <ServiceCard key={service.number} service={service} />)}
      </div>
      <div className="service-cta">
        <p>Want to know what’s running now?</p>
        <a className="button button-lime" href="#contact">Ask the studio <ArrowUpRight size={16}/></a>
      </div>
      <p className="fine-print">Public listings can become outdated. Contact the studio to confirm current services, session availability, timings, fees, and equipment before visiting.</p>
    </section>
  );
}
