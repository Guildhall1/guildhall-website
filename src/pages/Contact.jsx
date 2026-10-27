import { site } from '../config/site.js';
import { enquiryTypes } from '../content/enquiryTypes.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { useLocation } from '../lib/router.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { ContactForm } from '../components/ContactForm.jsx';
import { Todo } from '../components/Todo.jsx';

export default function Contact() {
  usePageMeta('contact');
  const { query } = useLocation();
  const requested = query.get('enquiry') || '';
  const preset = enquiryTypes.some((t) => t.value === requested) ? requested : '';
  const role = query.get('role');
  const presetMessage = role ? `I am interested in the role: ${role.slice(0, 120)}\n\n` : '';
  const { contact } = site;

  return (
    <>
      <PageHeader title="Contact us" intro="Tell us a little about what you need and we will be in touch. To book a consultation, choose “Book a consultation” as the enquiry type." />
      <section className="section">
        <div className="container contact">
          <ContactForm presetEnquiry={preset} presetMessage={presetMessage} />
          <aside className="contact__aside" aria-labelledby="contact-details">
            <h2 id="contact-details">Other ways to reach us</h2>
            <dl className="contact__list">
              <dt>Email</dt>
              <dd>{contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <Todo>email address</Todo>}</dd>
              <dt>Phone</dt>
              <dd>{contact.phones?.length ? contact.phones.map((p) => (
                <span key={p} className="contact__line"><a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></span>
              )) : <Todo>phone number</Todo>}</dd>
              <dt>Address</dt>
              <dd>{contact.address || <Todo>business address, or remove if you do not publish one</Todo>}</dd>
              <dt>Opening hours</dt>
              <dd>{contact.hours || <Todo>opening hours</Todo>}</dd>
            </dl>
            <h2>What happens next</h2>
            <p>We read every message and will reply to the email address you provide. <Todo>your usual response time</Todo></p>
          </aside>
        </div>
      </section>
    </>
  );
}
