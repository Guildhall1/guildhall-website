import { useMemo, useState } from 'react';
import { jobs } from '../content/jobs.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { PageHeader } from '../components/PageHeader.jsx';
import { ButtonLink } from '../components/Button.jsx';
import { EmptyState } from '../components/EmptyState.jsx';

const fmt = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Jobs() {
  usePageMeta('jobs');
  const [q, setQ] = useState('');
  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    return t ? jobs.filter((j) => [j.title, j.location, j.type, j.summary].join(' ').toLowerCase().includes(t)) : jobs;
  }, [q]);

  return (
    <>
      <PageHeader title="Jobs" intro="Current vacancies we are recruiting for." />
      <section className="section">
        <div className="container">
          {jobs.length === 0 ? (
            <EmptyState
              title="There are no vacancies at the moment"
              actions={<>
                <ButtonLink to="/contact?enquiry=candidate">Tell us what you are looking for</ButtonLink>
                <ButtonLink to="/candidates" variant="secondary">Information for candidates</ButtonLink>
              </>}
            >
              <p>New roles are added here as they become available. In the meantime, you are welcome to get in touch about the kind of work you are looking for.</p>
            </EmptyState>
          ) : (
            <>
              <div className="field jobs__search">
                <label htmlFor="job-search">Search jobs</label>
                <input id="job-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Job title, location or type" />
              </div>
              <p className="jobs__count" role="status">{shown.length} {shown.length === 1 ? 'vacancy' : 'vacancies'}</p>
              <ul className="jobs">
                {shown.map((j) => (
                  <li key={j.id} className="job">
                    <h2 className="job__title">{j.title}</h2>
                    <ul className="job__meta">
                      {j.location && <li><strong>Location:</strong> {j.location}</li>}
                      {j.type && <li><strong>Type:</strong> {j.type}</li>}
                      {j.salary && <li><strong>Salary:</strong> {j.salary}</li>}
                      {j.closingDate && <li><strong>Closing date:</strong> {fmt(j.closingDate)}</li>}
                    </ul>
                    {j.summary && <p>{j.summary}</p>}
                    {j.applyUrl ? (
                      <a className="btn btn--secondary" href={j.applyUrl} target="_blank" rel="noopener noreferrer">Apply for {j.title}</a>
                    ) : (
                      <ButtonLink to={`/contact?enquiry=candidate&role=${encodeURIComponent(j.title)}`} variant="secondary">Ask about this role</ButtonLink>
                    )}
                  </li>
                ))}
              </ul>
              {shown.length === 0 && <p>No vacancies match your search. Try a different word.</p>}
            </>
          )}
        </div>
      </section>
    </>
  );
}
