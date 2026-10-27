import { consultationLink } from '../config/site.js';
import { ButtonLink } from './Button.jsx';
import { ArchMark } from './Arch.jsx';

export function CtaBand({
  title = 'Let’s talk about your people needs',
  text = 'Whether you are hiring, facing an HR challenge or planning for change, we are here to help.',
  secondary = { to: '/services', label: 'Explore Our Services' },
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <ArchMark className="cta-band__mark" size={48} />
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row">
          <ButtonLink to={consultationLink}>Book a Consultation</ButtonLink>
          {secondary && <ButtonLink to={secondary.to} variant="light">{secondary.label}</ButtonLink>}
        </div>
      </div>
    </section>
  );
}
