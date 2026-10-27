import { services } from '../content/services.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { PageHeader } from '../components/PageHeader.jsx';
import { ButtonLink } from '../components/Button.jsx';
import { CtaBand } from '../components/CtaBand.jsx';

function jump(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    el.querySelector('h2')?.focus({ preventScroll: true });
  }
}

export default function Services() {
  usePageMeta('services');
  return (
    <>
      <PageHeader title="Our services" intro="Five areas of recruitment and people support. Choose one, or combine them to suit your organisation.">
        <nav aria-label="Services on this page" className="jump">
          <ul>
            {services.map((s) => (
              <li key={s.slug}><a href={`#${s.slug}`} onClick={(e) => jump(e, s.slug)}>{s.title}</a></li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`section service-detail ${i % 2 ? 'section--surface' : ''}`} aria-labelledby={`${s.slug}-title`}>
          <div className="container service-detail__grid">
            <div>
              <h2 id={`${s.slug}-title`} tabIndex={-1}>{s.title}</h2>
              <p className="service-detail__lede">{s.description}</p>
              <p className="service-detail__audience"><strong>Who it is for:</strong> {s.audience}</p>
              <ButtonLink to={`/contact?enquiry=${s.slug}`} variant="secondary">
                Enquire about {s.shortTitle}
              </ButtonLink>
            </div>
            <div className="service-detail__includes">
              <h3>What this can include</h3>
              <ul className="ticks">{s.includes.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Not sure which service you need?" text="Tell us what you are facing and we will suggest the right starting point." secondary={null} />
    </>
  );
}
