'use client';

import { ZoneTemplate } from './ZoneTemplate';

export default function QualityInspection() {
  return (
    <ZoneTemplate
      title="Quality Inspection Zone"
      subtitle="Showcase precision inspection and compliance solutions for premium manufacturing quality." 
      overview="A curated zone featuring next-generation sensors, analytics and end-to-end monitoring to ensure flawless products for global markets."
      bullets={['Inline inspection systems', 'Traceability and compliance tools', 'Advanced measurement solutions']}
      ctaHref="/exhibit/why-exhibit"
      ctaLabel="Why Exhibit"
    />
  );
}
