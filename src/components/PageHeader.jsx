export function PageHeader({ title, intro, children }) {
  return (
    <section className="page-header">
      <div className="container">
        <h1 className="page-header__title" tabIndex={-1}>{title}</h1>
        {intro && <p className="page-header__intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
