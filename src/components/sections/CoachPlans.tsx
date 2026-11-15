import { ArrowUpRight, Dumbbell, Flame, Salad, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const plans = [
  {
    number: '01', icon: Dumbbell, label: 'BUILD STRENGTH', title: 'Get stronger, step by step.',
    intro: 'A simple three-day strength framework to discuss with Master Godwin and adapt to your experience.',
    week: ['Day 1 · Goblet squat, chest press, seated row, glute bridge, core', 'Day 2 · Hip hinge, step-up, overhead press, lat pull-down, carry', 'Day 3 · Repeat the movement patterns with coach-guided progression'],
    food: ['Breakfast · Idli or dosa + sambar; add egg or curd', 'Lunch · Rice or millet + dal/beans + vegetables + curd', 'Snack · Fruit with roasted chana, peanuts, or curd', 'Dinner · Chapati or rice + vegetables + egg, paneer, tofu, fish, or chicken'],
  },
  {
    number: '02', icon: Flame, label: 'WEIGHT MANAGEMENT', title: 'Build a routine you can keep.',
    intro: 'Combine regular movement with strength work. Start from your current level and increase gradually with coaching.',
    week: ['2 days · Coach-guided full-body strength', '3–5 days · Walking, dance, or another enjoyable cardio option', 'Keep recovery days easy; adjust the week to your schedule'],
    food: ['Breakfast · Vegetable upma or idli + sambar; add a protein choice', 'Lunch · Rice or millet + vegetables + dal, beans, egg, fish, or chicken', 'Snack · Seasonal fruit or buttermilk/curd', 'Dinner · Chapati or rice + vegetables + dal, paneer, tofu, egg, fish, or chicken'],
  },
  {
    number: '03', icon: Sparkles, label: 'NEW TO TRAINING', title: 'Start light. Learn the moves.',
    intro: 'A confidence-first starting point for people returning to exercise or trying a gym session for the first time.',
    week: ['2 non-consecutive days · Learn basic strength movements', 'Other days · Easy walking or light activity you enjoy', 'Check technique with the coach before adding load'],
    food: ['Breakfast · Familiar choice such as idli + sambar, or oats + fruit and curd', 'Lunch · Rice + dal/beans + vegetables', 'Snack · Fruit, curd, or a small handful of roasted chana', 'Dinner · Chapati or rice + vegetables + a protein choice you enjoy'],
  },
];

export function CoachPlans() {
  return <section className="section coach-plans-section" id="coach-plans">
    <div className="section-kicker" data-reveal><span>04 / COACHING PLAYBOOK</span><span>GOAL-BASED STARTING POINTS</span></div>
    <div className="coach-plans-heading" data-reveal>
      <div><p className="eyebrow">WITH MASTER GODWIN</p><h2>TRAIN WITH<br/><i>A PLAN.</i></h2></div>
      <p>Choose a direction, then work with the coach to make the plan fit your starting point, schedule, and goals.</p>
    </div>
    <div className="coach-plan-grid">
      {plans.map(({ number, icon: Icon, label, title, intro, week, food }) => <article className="coach-plan-card" key={number} data-reveal>
        <div className="coach-plan-top"><span>{number} / {label}</span><Icon size={21}/></div>
        <h3>{title}</h3><p className="coach-plan-intro">{intro}</p>
        <div className="coach-plan-subhead"><Dumbbell size={14}/> SAMPLE WEEK</div>
        <ul>{week.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="coach-plan-food"><span><Salad size={15}/> SAMPLE MEAL DAY</span><ul className="meal-list">{food.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Discuss your plan <ArrowUpRight size={15}/></a>
      </article>)}
    </div>
    <div className="coach-plan-note"><p>General examples for adults to discuss with Master Godwin and adjust to your fitness level, food preferences, and schedule. Portion sizes and exercise load vary by person. If you have a medical condition, injury, food allergy, or special nutrition need, get advice from a qualified health professional.</p><div><a href="https://www.who.int/initiatives/behealthy/physical-activity" target="_blank" rel="noreferrer">WHO activity guidance <ArrowUpRight size={13}/></a><a href="https://www.nin.res.in/dietaryguidelines/pdfjs/locale/DGI24thJune2024fin.pdf" target="_blank" rel="noreferrer">ICMR-NIN dietary guidelines <ArrowUpRight size={13}/></a></div></div>
  </section>;
}
