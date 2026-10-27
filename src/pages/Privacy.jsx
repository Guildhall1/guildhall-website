import { site } from '../config/site.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { PageHeader } from '../components/PageHeader.jsx';
import { Todo } from '../components/Todo.jsx';

export default function Privacy() {
  usePageMeta('privacy');
  return (
    <>
      <PageHeader title="Privacy and cookies" intro="How we handle personal information shared through this website." />
      <section className="section">
        <div className="container prose prose--page">
          <div className="notice notice--warning" role="note">
            <p><strong>Draft for review.</strong> This is a starting template, not legal advice. Have it reviewed against the data protection law that applies to your business before the site goes live.</p>
          </div>

          <h2>Who we are</h2>
          <p>{site.name}{site.legal.registeredName && site.legal.registeredName !== site.name ? ` (registered as ${site.legal.registeredName}${site.legal.registrationNumber ? `, ${site.legal.registrationNumber}` : ''})` : site.legal.registrationNumber ? ` (${site.legal.registrationNumber})` : ''}{site.contact.address ? `, ${site.contact.address},` : ''} is responsible for personal information collected through this website. For any privacy questions or requests, contact us at {site.contact.email ? <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> : <Todo>contact email</Todo>}.</p>

          <h2>Information we collect</h2>
          <p>When you use our contact form, we collect the details you give us: your name, email address, and optionally your phone number and company, along with your enquiry type and message.</p>

          <h2>How we use it</h2>
          <p>We use this information to respond to your enquiry and, where relevant, to discuss our services or suitable roles with you. We do not sell your information. <Todo>the lawful basis you rely on for processing enquiries</Todo></p>

          <h2>Who we share it with</h2>
          <p>Messages sent through the contact form are delivered to us by Formspree, a third-party form service. <Todo>your email provider, and any other parties you share data with</Todo></p>

          <h2>How long we keep it</h2>
          <p><Todo>how long you keep enquiry and candidate information</Todo></p>

          <h2>Your rights</h2>
          <p>You may have rights to access, correct or delete your personal information, and to object to how it is used. To make a request, contact us using the email address above. <Todo>the data protection authority people can complain to</Todo></p>

          <h2>Cookies</h2>
          <p>This website does not set cookies of its own and does not use analytics or advertising trackers. Fonts are loaded from Google Fonts, which means your browser connects to Google’s servers when you visit. If you add analytics or other tools later, update this section and add a cookie consent banner if required.</p>

          <h2>Changes to this notice</h2>
          <p>We may update this notice from time to time. <Todo>date this notice was last updated</Todo></p>
        </div>
      </section>
    </>
  );
}
