import { ArrowUpRight } from 'lucide-react';
export function About() { return <section className="section about-section" id="about">
  <div className="section-kicker" data-reveal><span>01 / THE STUDIO</span><span>PERAMBUR, CHENNAI</span></div>
  <div className="about-grid">
    <div className="about-heading" data-reveal><p className="eyebrow">A PLACE TO BEGIN AGAIN</p><h2>YOUR HOUR.<br/><i>YOUR PACE.</i></h2></div>
    <div className="about-body" data-reveal><p className="body-lead">Sixty minutes can change the shape of your day.</p><p>60 Minutes Fitness Studio is based in Jamalia, Perambur. The studio listing describes group and one-to-one indoor training, with a focus on personal attention. Come as you are; ask the team what fits.</p><a className="text-link" href="#contact">Meet us in Perambur <ArrowUpRight size={15}/></a></div>
  </div>
  <img src="/assets/gallery/studio-floor-owner-google-mar-2022.jpg" alt="Training area with punching bags, ropes, and conditioning equipment" className="about-media actual-photo" loading="lazy" />
  <div className="about-caption"><span>01 — A LOCAL STUDIO, IN JAMALIA</span><span>PHOTO: GOOGLE MAPS BUSINESS GALLERY</span></div>
</section>; }
