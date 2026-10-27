import { Link } from '../lib/router.jsx';

// variant: "primary" (gold), "secondary" (outline), "light" (outline on dark backgrounds)
export function ButtonLink({ to, variant = 'primary', children, ...rest }) {
  return (
    <Link to={to} className={`btn btn--${variant}`} {...rest}>
      {children}
    </Link>
  );
}
