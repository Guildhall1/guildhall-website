// A numbered four-step process. Numbers are used because the content is a real sequence.
export function Steps({ steps, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title} className="steps__item">
          <span className="steps__num" aria-hidden="true">{i + 1}</span>
          <H className="steps__title">{s.title}</H>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
