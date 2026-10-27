import { useEffect, useRef, useState } from 'react';
import { navigation, consultationLink } from '../config/site.js';
import { Link, useLocation } from '../lib/router.jsx';
import { Logo } from './Logo.jsx';
import { ButtonLink } from './Button.jsx';

export function Header() {
  const { path } = useLocation();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />
        <button
          ref={buttonRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-toggle__icon" aria-hidden="true" />
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul className="site-nav__list">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="site-nav__link" aria-current={path === item.to ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink to={consultationLink} className="btn btn--primary site-nav__cta">
            Book a Consultation
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
