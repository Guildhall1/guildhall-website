// Highlights information the business still needs to supply.
export function Todo({ children }) {
  return (
    <mark className="todo">
      <strong>To confirm:</strong> {children}
    </mark>
  );
}

// Renders text, turning anything after "TODO:" into a highlighted note.
export function Copy({ text }) {
  const i = text.indexOf('TODO:');
  if (i === -1) return text;
  const before = text.slice(0, i).trim();
  return (
    <>
      {before && `${before} `}
      <Todo>{text.slice(i + 5).trim()}</Todo>
    </>
  );
}
