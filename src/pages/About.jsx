import { about } from '../content/about.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { PageHeader } from '../components/PageHeader.jsx';
import { CtaBand } from '../components/CtaBand.jsx';

export default function About() {
  usePageMeta('about');
  return (
    <>
      <PageHeader title="About Guildhall" intro="Recruitment and people advisory, built on listening first and advising clearly." />

      <section className="section">
        <div className="container split">
          <h2 className="split__heading">Who we are</h2>
          <div className="prose">{about.overview.map((p) => <p key={p}>{p}</p>)}</div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container statements">
          <div className="statement">
            <h2>Our mission</h2>
            <p className="statement__text">{about.mission}</p>
          </div>
          <div className="statement">
            <h2>Our vision</h2>
            <p className="statement__text">{about.vision}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="section__head"><h2 id="values-title">Our values</h2></div>
          <dl className="values">
            {about.values.map((v) => (
              <div key={v.title} className="values__item">
                <dt>{v.title}</dt>
                <dd>{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container split">
          <h2 className="split__heading">Our approach</h2>
          <div className="prose">{about.approach.map((p) => <p key={p}>{p}</p>)}</div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
