import { useEffect, useRef, useState } from 'react';
import { site } from '../config/site.js';
import { enquiryTypes, enquiryLabel } from '../content/enquiryTypes.js';
import { Link } from '../lib/router.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter an email address in the format name@example.com.';
  if (v.phone.trim() && !/^[+()\d\s-]{6,}$/.test(v.phone.trim())) e.phone = 'Enter a phone number using digits, spaces and + only.';
  if (!v.enquiry) e.enquiry = 'Choose the type of enquiry.';
  if (v.message.trim().length < 10) e.message = 'Enter a message of at least 10 characters.';
  if (!v.consent) e.consent = 'Confirm that you have read the privacy notice.';
  return e;
}

const LABELS = {
  name: 'Name', email: 'Email address', phone: 'Phone', enquiry: 'Enquiry type',
  message: 'Message', consent: 'Privacy confirmation',
};

export function ContactForm({ presetEnquiry = '', presetMessage = '' }) {
  const endpoint = site.form.endpoint;
  const blank = { name: '', email: '', phone: '', company: '', enquiry: presetEnquiry, message: presetMessage, consent: false, website: '' };
  const [values, setValues] = useState(blank);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | invalid | sending | success | error | not-configured
  const summaryRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    setValues((v) => ({ ...v, enquiry: presetEnquiry || v.enquiry, message: presetMessage || v.message }));
  }, [presetEnquiry, presetMessage]);

  useEffect(() => {
    if (status === 'invalid') summaryRef.current?.focus();
    if (['success', 'error', 'not-configured'].includes(status)) statusRef.current?.focus();
  }, [status]);

  function update(e) {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((er) => { const n = { ...er }; delete n[name]; return n; });
  }

  async function submit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) { setStatus('invalid'); return; }
    if (values.website) return; // hidden spam trap
    if (!endpoint) { setStatus('not-configured'); return; }

    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          enquiry: enquiryLabel(values.enquiry),
          message: values.message.trim(),
          _subject: `Website enquiry: ${enquiryLabel(values.enquiry)}`,
        }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus('success');
      setValues({ ...blank, enquiry: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const field = (name) => ({
    id: `f-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `f-${name}-error` : undefined,
  });
  const err = (name) => errors[name] && <p className="field__error" id={`f-${name}-error`}>{errors[name]}</p>;
  const contactEmail = site.contact.email;

  return (
    <form className="form" onSubmit={submit} noValidate>
      {!endpoint && (
        <div className="notice notice--warning" role="note">
          <p><strong>This form is not connected yet.</strong> Messages sent here will not reach anyone until the site owner connects a form service. See the README for setup steps.</p>
        </div>
      )}

      {status === 'invalid' && (
        <div className="notice notice--error" tabIndex={-1} ref={summaryRef} role="alert">
          <p><strong>Check the following and try again:</strong></p>
          <ul>
            {Object.keys(errors).map((k) => (
              <li key={k}><a href={`#f-${k}`} onClick={(e) => { e.preventDefault(); document.getElementById(`f-${k}`)?.focus(); }}>{LABELS[k]}: {errors[k]}</a></li>
            ))}
          </ul>
        </div>
      )}

      {status === 'success' && (
        <div className="notice notice--success" tabIndex={-1} ref={statusRef} role="status">
          <p><strong>Message sent.</strong> Thank you for getting in touch. We will reply to the email address you gave us.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="notice notice--error" tabIndex={-1} ref={statusRef} role="alert">
          <p><strong>Your message was not sent.</strong> Something went wrong while sending. Please try again{contactEmail ? <>, or email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a></> : ' later'}.</p>
        </div>
      )}
      {status === 'not-configured' && (
        <div className="notice notice--error" tabIndex={-1} ref={statusRef} role="alert">
          <p><strong>Your message was not sent.</strong> This form is not connected to an email or form service yet, so nothing has been submitted.{contactEmail && <> Please email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> instead.</>}</p>
        </div>
      )}

      <div className="form__grid">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input type="text" autoComplete="name" value={values.name} onChange={update} {...field('name')} required />
          {err('name')}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email address</label>
          <input type="email" autoComplete="email" value={values.email} onChange={update} {...field('email')} required />
          {err('email')}
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone <span className="field__optional">(optional)</span></label>
          <input type="tel" autoComplete="tel" value={values.phone} onChange={update} {...field('phone')} />
          {err('phone')}
        </div>
        <div className="field">
          <label htmlFor="f-company">Company <span className="field__optional">(optional)</span></label>
          <input type="text" autoComplete="organization" value={values.company} onChange={update} {...field('company')} />
        </div>
        <div className="field field--full">
          <label htmlFor="f-enquiry">Enquiry type</label>
          <select value={values.enquiry} onChange={update} {...field('enquiry')} required>
            <option value="">Choose an option</option>
            {enquiryTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          {err('enquiry')}
        </div>
        <div className="field field--full">
          <label htmlFor="f-message">Message</label>
          <p className="field__hint" id="f-message-hint">Tell us briefly what you need. Please do not include sensitive personal information.</p>
          <textarea rows={6} value={values.message} onChange={update} {...field('message')}
            aria-describedby={['f-message-hint', errors.message && 'f-message-error'].filter(Boolean).join(' ')} required />
          {err('message')}
        </div>
        <div className="field field--full field--check">
          <input type="checkbox" checked={values.consent} onChange={update} {...field('consent')} />
          <label htmlFor="f-consent">I have read the <Link to="/privacy">privacy notice</Link> and understand how my details will be used.</label>
          {err('consent')}
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="f-website">Leave this field empty</label>
          <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
        </div>
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
