import { consultationLink } from '../config/site.js';
import { services } from '../content/services.js';
import { howWeWork } from '../content/steps.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { Link } from '../lib/router.jsx';
import { ButtonLink } from '../components/Button.jsx';
import { Steps } from '../components/Steps.jsx';
import { CtaBand } from '../components/CtaBand.jsx';

export default function Home() {
  usePageMeta('home');
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1 className="hero__title" tabIndex={-1}>The right people. Stronger organisations.</h1>
            <p className="hero__lede">
              Guildhall People Advisory helps organisations build stronger workplaces, develop capable leaders and
              achieve sustainable performance through their people.
            </p>
            <div className="btn-row">
              <ButtonLink to={consultationLink}>Book a Consultation</ButtonLink>
              <ButtonLink to="/services" variant="light">Explore Our Services</ButtonLink>
            </div>
          </div>
          <div className="hero__arch">
            <svg className="hero__arch-frame" viewBox="0 0 100 140" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path d="M1 140V52Q1 22 50 1Q99 22 99 52V140" fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            </svg>
            <h2 className="hero__arch-title">What we do</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services?section=${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <h2 className="split__heading">People are at the centre of every organisation</h2>
          <div className="prose">
            <p>
              Successful organisations are built by people. We combine professional expertise with practical,
              commercially focused HR advice, working collaboratively to understand your objectives and challenges.
            </p>
            <p>
              From growing businesses establishing their people foundations to established organisations navigating
              change, we develop solutions tailored to your culture, operations and ambitions. <Link to="/about">Read more about us</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="services-title">
        <div className="container">
          <div className="section__head">
            <h2 id="services-title">Our services</h2>
            <p>Five areas of support, available individually or together.</p>
          </div>
          <ul className="service-index">
            {services.map((s) => (
              <li key={s.slug} className="service-index__item">
                <h3><Link to={`/services?section=${s.slug}`}>{s.title}</Link></h3>
                <p>{s.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-label="Who we help">
        <div className="container audiences">
          <article className="audience">
            <h2>For employers</h2>
            <p>Support for business owners, managers and HR teams who need to hire well and look after their people.</p>
            <ul className="ticks">
              <li>Recruitment for individual roles or larger campaigns</li>
              <li>Practical HR advice when you need it</li>
              <li>Planning for growth and change</li>
            </ul>
            <ButtonLink to="/employers" variant="secondary">How we help employers</ButtonLink>
          </article>
          <article className="audience audience--alt">
            <h2>For candidates</h2>
            <p>Straightforward, respectful support for people looking for their next role.</p>
            <ul className="ticks">
              <li>Browse current vacancies</li>
              <li>Talk to us about the work you are looking for</li>
              <li>Clear communication at every stage</li>
            </ul>
            <div className="btn-row">
              <ButtonLink to="/jobs" variant="secondary">View jobs</ButtonLink>
              <Link to="/candidates" className="text-link">Information for candidates</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="how-title">
        <div className="container">
          <div className="section__head">
            <h2 id="how-title">How we work</h2>
            <p>A clear, four-step approach, whatever the size of the task.</p>
          </div>
          <Steps steps={howWeWork} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
