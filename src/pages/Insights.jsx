import { insights } from '../content/insights.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { PageHeader } from '../components/PageHeader.jsx';
import { ButtonLink } from '../components/Button.jsx';
import { EmptyState } from '../components/EmptyState.jsx';

const fmt = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Insights() {
  usePageMeta('insights');
  const sorted = [...insights].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return (
    <>
      <PageHeader title="Insights" intro="Guidance and perspectives on recruitment, HR and people management." />
      <section className="section">
        <div className="container">
          {sorted.length === 0 ? (
            <EmptyState title="Insights coming soon" actions={<ButtonLink to="/contact" variant="secondary">Contact us</ButtonLink>}>
              <p>We are preparing articles on recruitment, HR and people management. If there is a topic you would like us to cover, let us know.</p>
            </EmptyState>
          ) : (
            <ul className="articles">
              {sorted.map((a) => (
                <li key={a.slug} className="article-card">
                  <p className="article-card__meta">
                    {a.date && <time dateTime={a.date}>{fmt(a.date)}</time>}
                    {a.category && <span>{a.category}</span>}
                  </p>
                  <h2>{a.url ? <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a> : a.title}</h2>
                  <p>{a.excerpt}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
