'use client';

import { ZoneTemplate } from './ZoneTemplate';

export default function MachineVision() {
  return (
    <ZoneTemplate
      title="Machine Vision Zone"
      subtitle="Discover vision systems that empower quality, safety and automation intelligence."
      overview="A premium showcase of inspection cameras, AI vision analytics and machine learning systems for modern production lines."
      bullets={['High-speed inspection systems', 'AI-powered image analysis', 'Vision-guided robotics integration']}
      ctaHref="/exhibit/gallery"
      ctaLabel="View Gallery"
    />
  );
}
