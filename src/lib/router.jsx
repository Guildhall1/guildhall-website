// A small, dependency-free router.
// "history" mode: clean URLs (/about). Needs the host to send all paths to index.html
//                 (public/_redirects for Netlify and vercel.json for Vercel are included).
// "hash" mode:    URLs like /#/about. Works on any static host with no setup.
import { useEffect, useState } from 'react';
import { site } from '../config/site.js';

const MODE = site.routerMode;
const EVENT = 'app:navigate';

function readLocation() {
  if (MODE === 'hash') {
    const raw = window.location.hash.replace(/^#/, '') || '/';
    const [path, qs = ''] = raw.split('?');
    return { path: path.startsWith('/') ? path : '/', query: new URLSearchParams(qs) };
  }
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return { path, query: new URLSearchParams(window.location.search) };
}

export function toHref(to) {
  return MODE === 'hash' ? `#${to}` : to;
}

export function navigate(to) {
  if (MODE === 'hash') {
    window.location.hash = to;
  } else {
    window.history.pushState({}, '', to);
    window.dispatchEvent(new Event(EVENT));
  }
}

export function useLocation() {
  const [loc, setLoc] = useState(readLocation);
  useEffect(() => {
    const update = () => setLoc(readLocation());
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    window.addEventListener(EVENT, update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
      window.removeEventListener(EVENT, update);
    };
  }, []);
  return loc;
}

export function Link({ to, onClick, children, ...rest }) {
  function handleClick(e) {
    if (onClick) onClick(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (MODE === 'history') {
      e.preventDefault();
      navigate(to);
    }
  }
  return (
    <a href={toHref(to)} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
