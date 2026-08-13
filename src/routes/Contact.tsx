import { useState, type SubmitEvent } from 'react';
import './contact.css';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
      // honeypot — real users never see or fill this field
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
    };

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="contact-page">
      <div className="section-label mono">// send_message</div>
      <div className="contact">
        {status === 'sent' ? (
          <p className="contact-confirmation mono">
            Message sent — I'll get back to you soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="mono" htmlFor="name">
              name
            </label>
            <input id="name" name="name" type="text" required maxLength={100} />

            <label className="mono" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
            />

            <label className="mono" htmlFor="message">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={6}
            />

            {/* honeypot: hidden from real users via CSS, bots fill it anyway */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company">company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="mono"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'sending…' : 'send'}
            </button>

            {status === 'error' && (
              <p className="contact-error mono">
                Something went wrong — try again, or reach out on GitHub.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
