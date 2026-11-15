import { useEffect } from 'react';
import { ArrowLeft, Quote } from 'lucide-react';
import { customerTestimonials } from '../../data/testimonials';

export function TestimonialsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Customer Testimonials — 60 Minutes Fitness Studio';
    if (description) description.content = 'Customer testimonials for 60 Minutes Fitness Studio in Perambur, Chennai.';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <section className="testimonials-page">
      <div className="section testimonials-wrap">
        <a className="testimonials-back" href="/#reviews"><ArrowLeft size={15}/> Back to the studio site</a>
        <div className="testimonials-hero" data-reveal>
          <span className="eyebrow">60 MINUTES FITNESS STUDIO / CUSTOMER VOICES</span>
          <h1>CUSTOMER<br/><i>TESTIMONIALS.</i></h1>
          <p>Feedback shared by members of the studio.</p>
        </div>

        <div className="testimonials-grid">
          {customerTestimonials.map((testimonial, index) => (
            <article className="testimonials-card" key={testimonial.name} data-reveal>
              <div className="testimonials-card-top"><span>{String(index + 1).padStart(2, '0')} / CUSTOMER REVIEW</span><Quote size={22} aria-hidden="true"/></div>
              <p>“{testimonial.text}”</p>
              <h3>{testimonial.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
