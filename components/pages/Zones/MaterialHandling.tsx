'use client';

import { ZoneTemplate } from './ZoneTemplate';

export default function MaterialHandling() {
  return (
    <ZoneTemplate
      title="Material Handling Zone"
      subtitle="Explore premium material handling systems for efficient logistics and warehousing." 
      overview="A curated zone for automated conveyors, storage technologies and next-generation handling solutions." 
      bullets={['Automated conveyors and sortation', 'Smart warehousing support', 'Advanced load handling solutions']}
      ctaHref="/exhibit/plan-your-expo"
      ctaLabel="Plan Your Expo"
    />
  );
}
