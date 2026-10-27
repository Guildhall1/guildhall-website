import { usePageMeta } from '../lib/usePageMeta.js';
import { PageHeader } from '../components/PageHeader.jsx';
import { ButtonLink } from '../components/Button.jsx';

export default function NotFound() {
  usePageMeta('notFound');
  return (
    <PageHeader title="Page not found" intro="The page you were looking for does not exist or may have moved.">
      <div className="btn-row">
        <ButtonLink to="/">Go to the home page</ButtonLink>
        <ButtonLink to="/contact" variant="secondary">Contact us</ButtonLink>
      </div>
    </PageHeader>
  );
}
