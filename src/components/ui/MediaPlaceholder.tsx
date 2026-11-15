import { Camera } from 'lucide-react';

type Props = { label: string; className?: string; variant?: 'hero' | 'portrait' | 'poster' | 'tile' };
export function MediaPlaceholder({ label, className = '', variant = 'tile' }: Props) {
  return <div className={`media-placeholder media-${variant} ${className}`} role="img" aria-label={`${label} placeholder — original studio media pending`}>
    <div className="media-grid" aria-hidden="true" />
    <span className="media-mark uppercase"><Camera size={14} strokeWidth={1.6} /> ORIGINAL MEDIA PENDING</span>
    <span className="media-name">{label}</span>
  </div>;
}
