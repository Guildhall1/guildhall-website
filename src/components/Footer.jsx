import { site, navigation, consultationLink } from '../config/site.js';
import { services } from '../content/services.js';
import { Link } from '../lib/router.jsx';
import { Logo } from './Logo.jsx';
import { Todo } from './Todo.jsx';

export function Footer() {
  const { contact, legal } = site;
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo onDark />
          <p>People and HR consultancy helping organisations build stronger workplaces through their people.</p>
          <Link to={consultationLink} className="site-footer__cta">Book a Consultation</Link>
        </div>

        <nav aria-label="Footer">
          <h2 className="site-footer__heading">Explore</h2>
          <ul>
            {navigation.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__heading">Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services?section=${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Contact</h2>
          <ul className="site-footer__contact">
            <li>{contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <Todo>email address</Todo>}</li>
            {contact.phones?.length ? contact.phones.map((p) => (
              <li key={p}><a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></li>
            )) : <li><Todo>phone number</Todo></li>}
            <li>{contact.address || <Todo>business address</Todo>}</li>
            {contact.linkedin && <li><a href={contact.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>}
          </ul>
        </div>
      </div>

      <div className="container site-footer__legal">
        <p>
          © {new Date().getFullYear()} {legal.registeredName || site.name}.{' '}
          {legal.registrationNumber ? `Company number ${legal.registrationNumber}.` : <Todo>company registration details</Todo>}
        </p>
        <Link to="/privacy">Privacy and cookies</Link>
      </div>
    </footer>
  );
}
