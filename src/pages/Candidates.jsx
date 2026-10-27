import { candidateProcess } from '../content/steps.js';
import { candidateFaqs } from '../content/faqs.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { PageHeader } from '../components/PageHeader.jsx';
import { ButtonLink } from '../components/Button.jsx';
import { Steps } from '../components/Steps.jsx';
import { Faq } from '../components/Faq.jsx';

export default function Candidates() {
  usePageMeta('candidates');
  return (
    <>
      <PageHeader title="For candidates" intro="Looking for your next role? Here is how we can help, and what to expect when you get in touch.">
        <div className="btn-row">
          <ButtonLink to="/jobs">View current jobs</ButtonLink>
          <ButtonLink to="/contact?enquiry=candidate" variant="secondary">Get in touch</ButtonLink>
        </div>
      </PageHeader>

      <section className="section" aria-labelledby="cand-process">
        <div className="container">
          <div className="section__head">
            <h2 id="cand-process">How it works</h2>
            <p>Four simple steps, with clear communication throughout.</p>
          </div>
          <Steps steps={candidateProcess} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container split">
          <h2 className="split__heading">What you can expect from us</h2>
          <div className="prose">
            <p>We will be honest about the roles we discuss with you, keep you informed, and treat your information with care.</p>
            <p>
              Online applications and CV uploads are not available yet. For now, the best way to register your interest is
              through our contact form.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cand-faq">
        <div className="container split">
          <h2 id="cand-faq" className="split__heading">Questions from candidates</h2>
          <Faq items={candidateFaqs} />
        </div>
      </section>
    </>
  );
}
