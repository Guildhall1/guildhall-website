import { useEffect } from 'react';
import { site } from '../config/site.js';
import { seo } from '../content/seo.js';

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

// Sets the browser title, description and social-sharing tags for a page.
// Note: some social networks read only the defaults in index.html, because they
// do not run JavaScript. See README for options.
export function usePageMeta(key) {
  useEffect(() => {
    const page = seo[key] || {};
    const title = page.title ? `${page.title} | ${site.name}` : seo.default.title;
    const description = page.description || seo.default.description;
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
  }, [key]);
}
