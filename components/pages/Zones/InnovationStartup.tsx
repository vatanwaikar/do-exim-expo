'use client';

import { ZoneTemplate } from './ZoneTemplate';

export default function InnovationStartup() {
  return (
    <ZoneTemplate
      title="Innovation & Startup Zone"
      subtitle="Explore breakthrough startups and emerging technologies shaping the future of trade." 
      overview="A premium platform for innovators and investors to connect around smart factory, logistics and automation breakthroughs." 
      bullets={['Startup innovation showcases', 'Founders pitch sessions', 'Collaborative growth opportunities']}
      ctaHref="/register/exhibitor"
      ctaLabel="Become an Exhibitor"
    />
  );
}
