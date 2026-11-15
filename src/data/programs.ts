export type StudioService = {
  number: string;
  title: string;
  type: string;
  text: string;
  icon: 'group' | 'personal' | 'dance' | 'aerobics' | 'crossfit' | 'yoga' | 'strength' | 'goals' | 'cardio';
  image: string;
  imageAlt: string;
};

// Services below are drawn from the project brief and the studio's public listings.
// The listings are snapshots, so the site asks visitors to confirm current availability.
export const programs: StudioService[] = [
  { number: '01', title: 'Group training', type: 'GROUP FORMAT', text: 'An indoor group format is listed for the studio. Contact the team to ask which group sessions and class times are currently running.', icon: 'group', image: '/assets/programs/group-training.jpg', imageAlt: 'People taking part in a group workout class' },
  { number: '02', title: 'One-to-one coaching', type: 'PERSONAL FORMAT', text: 'Individual training is listed with personal attention. Ask the studio about current trainer availability and options for your goals.', icon: 'personal', image: '/assets/programs/personal-coaching.jpg', imageAlt: 'A trainer coaching a woman through weight training' },
  { number: '03', title: 'Zumba', type: 'DANCE FITNESS', text: 'Zumba appears among the studio’s listed fitness styles. Check current batches, days, and timings before visiting.', icon: 'dance', image: '/assets/programs/zumba.jpg', imageAlt: 'A woman dancing in a fitness studio' },
  { number: '04', title: 'Aerobics', type: 'FITNESS CLASS', text: 'Aerobics is listed as a studio option. Contact the team to confirm whether a class is currently scheduled.', icon: 'aerobics', image: '/assets/programs/aerobics.jpg', imageAlt: 'A group of women dancing together in an exercise class' },
  { number: '05', title: 'CrossFit', type: 'FITNESS OPTION', text: 'CrossFit appears in the public studio listing. Ask which training format is currently offered and what to bring.', icon: 'crossfit', image: '/assets/programs/crossfit.jpg', imageAlt: 'CrossFit gym floor with barbells, bikes, and a training rig' },
  { number: '06', title: 'Yoga', type: 'YOGA OPTION', text: 'Yoga is listed for the studio, including Ashtanga yoga in one directory. Confirm the current class type and availability directly.', icon: 'yoga', image: '/assets/programs/yoga.jpg', imageAlt: 'People practicing yoga together in a gym' },
  { number: '07', title: 'Strength training', type: 'TRAINING FOCUS', text: 'Strengthening exercise and strength equipment are referenced in the studio listing. Ask the team about suitable sessions and equipment.', icon: 'strength', image: '/assets/programs/strength-training.jpg', imageAlt: 'An athlete lifting a barbell from the gym floor' },
  { number: '08', title: 'Weight management', type: 'GOAL SUPPORT', text: 'Weight management appears in a public service category. Contact the studio to understand the current training approach and available support.', icon: 'goals', image: '/assets/programs/weight-management.jpg', imageAlt: 'A woman running on a treadmill during a workout' },
  { number: '09', title: 'Cardio equipment', type: 'STUDIO EQUIPMENT', text: 'Cardio equipment is listed among the studio facilities. Call ahead to check the current equipment and access details.', icon: 'cardio', image: '/assets/programs/cardio-equipment.jpg', imageAlt: 'Treadmills and exercise equipment in a gym' },
];
