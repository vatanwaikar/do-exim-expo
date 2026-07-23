'use client';

import { ZoneTemplate } from './ZoneTemplate';

export default function IndustrialIoT() {
  return (
    <ZoneTemplate
      title="Industrial IoT Zone"
      subtitle="Experience the connected factory with intelligent sensors, analytics and operations platforms." 
      overview="A premium showcase of industrial IoT systems driving real-time performance, visibility and predictive maintenance." 
      bullets={['Asset tracking and monitoring', 'Edge analytics & digital twins', 'Connected manufacturing platforms']}
      ctaHref="/exhibit/why-exhibit"
      ctaLabel="Discover More"
    />
  );
}
