'use client';

import { ZoneTemplate } from './ZoneTemplate';

export default function AISmartFactory() {
  return (
    <ZoneTemplate
      title="AI & Smart Factory Zone"
      subtitle="Discover intelligent manufacturing systems built for speed, quality and adaptability." 
      overview="A premium zone for AI-driven production, predictive automation and smart factory orchestration." 
      bullets={['AI-driven process optimization', 'Smart factory orchestration', 'Predictive quality and uptime']}
      ctaHref="/exhibit/plan-your-expo"
      ctaLabel="Plan Your Expo"
    />
  );
}
