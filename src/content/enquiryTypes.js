import { services } from './services.js';

// Options in the contact form "Enquiry type" field.
export const enquiryTypes = [
  { value: 'consultation', label: 'Book a consultation' },
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'candidate', label: 'Candidate enquiry' },
  { value: 'general', label: 'Something else' },
];

export function enquiryLabel(value) {
  return enquiryTypes.find((t) => t.value === value)?.label || '';
}
