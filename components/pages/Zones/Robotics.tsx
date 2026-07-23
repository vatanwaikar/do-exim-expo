'use client';

import { ZoneTemplate } from './ZoneTemplate';

export default function Robotics() {
  return (
    <ZoneTemplate
      title="Robotics Zone"
      subtitle="Explore advanced robotics solutions for manufacturing, assembly and logistics."
      overview="A premium showcase of industrial robots, collaborative automation, and intelligent production systems designed for global exhibitors and buyers."
      bullets={['Automated assembly and material handling', 'Collaborative robots for flexible production', 'Precision robotics for smart factories']}
      ctaHref="/exhibit/plan-your-expo"
      ctaLabel="Plan Your Expo"
    />
  );
}
