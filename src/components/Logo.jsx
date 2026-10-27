import { site } from '../config/site.js';
import { Link } from '../lib/router.jsx';
import { ArchMark } from './Arch.jsx';

export function Logo({ onDark = false }) {
  return (
    <Link to="/" className={`logo ${onDark ? 'logo--dark' : ''}`} aria-label={`${site.name}, home`}>
      {site.logo.src ? (
        <img src={onDark ? site.logo.srcOnDark || site.logo.src : site.logo.src} alt="" className="logo__img" width="58" height="54" />
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
