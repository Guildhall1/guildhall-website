import { Copy } from './Todo.jsx';

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq__item">
          <summary className="faq__q">{item.q}</summary>
          <div className="faq__a"><p><Copy text={item.a} /></p></div>
        </details>
      ))}
    </div>
  );
}
