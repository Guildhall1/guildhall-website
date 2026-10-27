// ─────────────────────────────────────────────────────────────
// SITE SETTINGS — edit company details here.
// Any value left as null shows a clearly marked "To confirm" note
// on the website, so nothing is invented.
// ─────────────────────────────────────────────────────────────
const env = import.meta.env || {};

export const site = {
  name: 'Guildhall People Advisory',
  domain: 'guildhallpeopleadvisory.com',
  shortName: 'Guildhall',
  descriptor: 'People Advisory',

  // Logo mark (the G monogram) shown beside the name. srcOnDark is used on dark backgrounds.
  // Set src to null to fall back to a simple text logo.
  logo: { src: '/logo-mark.png', srcOnDark: '/logo-mark-light.png' },

  contact: {
    email: 'info@guildhallpeopleadvisory.com',
    phones: ['+234 803 758 4440', '+234 802 704 9154'], // add or remove numbers as needed
    address: '12 Ondo Street, Lagos, Nigeria',
    hours: 'Monday to Friday, 9am to 5pm',
    linkedin: null,  // e.g. 'https://www.linkedin.com/company/...'
  },

  legal: {
    registeredName: 'Guildhall Professional Services', // name on the CAC certificate
    registrationNumber: 'BN 9955633', // CAC registration, shown in the footer
    registeredOffice: null,
  },

  // Where you operate. Leave null until confirmed; the site will not name a country.
  areaServed: null,

  form: {
    // Formspree form endpoint. Public by design, so it is safe here.
    // VITE_FORM_ENDPOINT in .env (or your host's settings) overrides it if set.
    endpoint: env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/mbggowrz',
  },

  routerMode: env.VITE_ROUTER_MODE === 'hash' ? 'hash' : 'history',
};

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/employers', label: 'Employers' },
  { to: '/candidates', label: 'Candidates' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export const consultationLink = '/contact?enquiry=consultation';
