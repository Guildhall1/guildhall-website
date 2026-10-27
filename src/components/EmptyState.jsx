import { ArchMark } from './Arch.jsx';

export function EmptyState({ title, children, actions }) {
  return (
    <div className="empty-state" role="status">
      <ArchMark className="empty-state__mark" size={44} />
      <h2>{title}</h2>
      <div className="empty-state__body">{children}</div>
      {actions && <div className="btn-row btn-row--center">{actions}</div>}
    </div>
  );
}
