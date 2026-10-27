import { site } from '../config/site.js';
import { Link } from '../lib/router.jsx';
import { ArchMark } from './Arch.jsx';

export function Logo({ onDark = false }) {
  return (
    <Link to="/" className={`logo ${onDark ? 'logo--dark' : ''}`} aria-label={`${site.name}, home`}>
      {site.logo.src ? (
        onDark ? (
          <img src={site.logo.srcOnDark || site.logo.src} alt="" className="logo__img" width="58" height="54" />
        ) : (
          // In dark mode the header is dark, so the light version of the mark is used there too.
          <picture>
            {site.logo.srcOnDark && <source srcSet={site.logo.srcOnDark} media="(prefers-color-scheme: dark)" />}
            <img src={site.logo.src} alt="" className="logo__img" width="58" height="54" />
          </picture>
        )
      ) : (
        <ArchMark className="logo__mark" />
      )}
      <span className="logo__text">
        <span className="logo__name">{site.shortName}</span>
        <span className="logo__descriptor">{site.descriptor}</span>
      </span>
    </Link>
  );
}
