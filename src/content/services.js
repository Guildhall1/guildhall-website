// The five services. Edit wording freely; "slug" is used in links and the contact form.
export const services = [
  {
    slug: 'recruitment',
    shortTitle: 'recruitment', // used in button text
    title: 'Recruitment and talent acquisition',
    summary: 'Finding and securing the people your organisation needs, from a single key hire to a wider recruitment campaign.',
    description:
      'We manage recruitment from first conversation to accepted offer. We take time to understand the role, the team and what success looks like, so the candidates you meet are a genuine fit.',
    includes: [
      'Scoping roles and writing clear job descriptions',
      'Sourcing, screening and shortlisting candidates',
      'Designing and supporting interviews and assessments',
      'Managing offers and supporting a smooth start',
    ],
    audience: 'Employers planning a new hire or a larger recruitment drive.',
  },
  {
    slug: 'hr-advisory',
    shortTitle: 'HR advisory', // used in button text
    title: 'HR advisory and consultancy',
    summary: 'Practical, dependable HR advice for day-to-day questions, specific projects and periods of change.',
    description:
      'Whether you have no in-house HR team or need extra support for an existing one, we give clear, practical advice and help you put it into practice.',
    includes: [
      'Day-to-day HR guidance',
      'Writing and reviewing policies and employee handbooks',
      'Reviewing HR processes and documentation',
      'HR compliance reviews',
      'Supporting organisational change',
    ],
    audience: 'Business owners, managers and HR teams who need reliable HR support.',
  },
  {
    slug: 'people-strategy',
    shortTitle: 'people strategy', // used in button text
    title: 'People strategy and workforce planning',
    summary: 'Making sure your people plans support where your organisation is heading.',
    description:
      'We help you connect business goals with the skills, structure and capacity you will need, so you can plan ahead rather than react.',
    includes: [
      'Developing a people strategy aligned to business goals',
      'Workforce analysis and planning',
      'Organisational development, design and structure reviews',
      'Succession and capability planning',
    ],
    audience: 'Leadership teams planning growth, restructuring or long-term change.',
  },
  {
    slug: 'learning-development',
    shortTitle: 'learning and development', // used in button text
    title: 'Learning and development',
    summary: 'Building the skills and confidence of your people, from new managers to senior leaders.',
    description:
      'We identify where development will make the most difference and help you design learning that fits your organisation and your people.',
    includes: [
      'Training needs analysis',
      'Leadership and management development',
      'Designing development programmes',
      'Performance management frameworks',
      'Evaluating the impact of learning',
    ],
    audience: 'Organisations investing in the growth and retention of their people.',
  },
  {
    slug: 'employee-relations',
    shortTitle: 'employee relations', // used in button text
    title: 'Employee relations',
    summary: 'Handling workplace issues fairly, consistently and with care.',
    description:
      'We guide you through sensitive people matters so they are handled properly, and help you build a working environment where issues are less likely to arise.',
    includes: [
      'Guidance on disciplinary and grievance matters',
      'Managing absence and performance',
      'Advice on policies and procedures',
      'Improving workplace communication and engagement',
    ],
    audience: 'Managers and HR teams dealing with workplace issues.',
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
