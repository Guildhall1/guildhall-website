import { services } from '../content/services.js';
import { employerProcess } from '../content/steps.js';
import { employerFaqs } from '../content/faqs.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { Link } from '../lib/router.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { Steps } from '../components/Steps.jsx';
import { Faq } from '../components/Faq.jsx';
import { CtaBand } from '../components/CtaBand.jsx';

export default function Employers() {
  usePageMeta('employers');
  return (
    <>
      <PageHeader title="For employers" intro="Recruitment and HR support for business owners, managers and HR teams, whether you need help with one role or your whole people plan." />

      <section className="section">
        <div className="container split">
          <h2 className="split__heading">How we can support you</h2>
          <div className="prose">
            <p>
              Every organisation is different. Some need help filling a hard-to-recruit role. Others need someone to turn to
              for HR advice, or a partner to help plan for growth or change. We work with you to understand what you need,
              then provide the right support.
            </p>
            <ul className="link-list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services?section=${s.slug}`}>{s.title}</Link>
                  <span>{s.summary}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="process-title">
        <div className="container">
          <div className="section__head">
            <h2 id="process-title">Working with us</h2>
            <p>A simple process from first conversation to follow-up.</p>
          </div>
          <Steps steps={employerProcess} />
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container split">
          <h2 id="faq-title" className="split__heading">Frequently asked questions</h2>
          <Faq items={employerFaqs} />
        </div>
      </section>

      <CtaBand title="Ready to discuss your needs?" />
    </>
  );
}
