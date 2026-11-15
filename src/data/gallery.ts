export type StudioMedia = {
  src: string;
  alt: string;
  label: string;
  category: string;
  source: string;
};

export const galleryCategories = ['Studio', 'Training', 'Equipment', 'Community', 'Outdoor sessions'];
export const studioMedia: StudioMedia[] = [
  { src: '/assets/gallery/interior-owner-google-jul-2026.jpg', alt: '60 Minutes Fitness Studio floor with weights, benches, and training equipment', label: 'Strength floor', category: 'Studio', source: 'Google Maps · By owner · Jul 2026' },
  { src: '/assets/gallery/studio-floor-owner-google-mar-2022.jpg', alt: 'Studio training area with hanging bags, ropes, medicine balls, and 60 Minutes signage', label: 'Inside the studio', category: 'Equipment', source: 'Google Maps · By owner · Mar 2022' },
  { src: '/assets/gallery/beach-group-owner-google-mar-2022.jpg', alt: 'Group of studio members after an outdoor beach workout', label: 'Training together', category: 'Group activities', source: 'Google Maps · By owner · Mar 2022' },
  { src: '/assets/gallery/brand-detail-justdial.jpg', alt: '60 Minutes Fitness Studio logo on an interior wall panel', label: 'Studio details', category: 'Inside the studio', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/womens-day-community-justdial.jpg', alt: 'Studio members gathered for a Women’s Day celebration', label: 'Women’s Day gathering', category: 'Community', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/community-moments-justdial.jpg', alt: 'Collage of members and group moments from 60 Minutes Fitness Studio', label: 'Community moments', category: 'Community', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/studio-community-wall-justdial.jpg', alt: 'Handprints on a studio wall beside the training area', label: 'The community wall', category: 'Studio', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/outdoor-group-justdial.jpg', alt: 'Studio members gathered outdoors after a group fitness event', label: 'Outdoors together', category: 'Outdoor sessions', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/team-training-justdial.jpg', alt: '60 Minutes Fitness Studio members together inside the training area', label: 'Team 60 Minutes', category: 'Group activities', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/cardio-floor-justdial.jpg', alt: 'Cardio machines on the studio training floor', label: 'Cardio floor', category: 'Equipment', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/studio-equipment-justdial.jpg', alt: 'Training machines and equipment inside 60 Minutes Fitness Studio', label: 'Inside the training floor', category: 'Equipment', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/strength-floor-justdial.jpg', alt: 'Strength training floor with benches and weight machines', label: 'Strength training', category: 'Training', source: 'Justdial public gallery · 360 px thumbnail' },
  { src: '/assets/gallery/mirrored-training-floor-justdial.jpg', alt: 'Mirrored training floor with 60 Minutes Fitness Studio signage', label: 'Training floor', category: 'Studio', source: 'Justdial public gallery · 360 px thumbnail' },
];
