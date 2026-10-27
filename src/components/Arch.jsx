// The arch is Guildhall's signature shape: a doorway, used sparingly.
export function ArchMark({ className = '', size = 28 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M9 27V14Q9 9 16 4Q23 9 23 14V27" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M5 27h22" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}
