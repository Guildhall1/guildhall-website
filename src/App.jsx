import { useEffect, useRef } from 'react';
import { useLocation } from './lib/router.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Employers from './pages/Employers.jsx';
import Candidates from './pages/Candidates.jsx';
import Jobs from './pages/Jobs.jsx';
import Insights from './pages/Insights.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

// To add a page: create it in src/pages, add it here, then add it to navigation in src/config/site.js.
const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/employers': Employers,
  '/candidates': Candidates,
  '/jobs': Jobs,
  '/insights': Insights,
  '/contact': Contact,
  '/privacy': Privacy,
};

export default function App() {
  const { path, query } = useLocation();
  const Page = routes[path] || NotFound;
  const first = useRef(true);
  const section = query.get('section');

  useEffect(() => {
    const target = section && document.getElementById(section);
    if (target) {
      target.scrollIntoView();
      target.querySelector('h2')?.focus({ preventScroll: true });
    } else {
      window.scrollTo(0, 0);
      // Move focus to the page heading after navigation so screen reader users hear the new page.
      if (!first.current) document.querySelector('main h1')?.focus({ preventScroll: true });
    }
    first.current = false;
  }, [path, section]);

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.querySelector('main h1')?.focus(); }}>
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Page />
      </main>
      <Footer />
    </>
  );
}
