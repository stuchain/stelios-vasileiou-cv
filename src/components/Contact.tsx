import { social } from "../data/generated";
import GlassPanel from "./ui/GlassPanel";
import GlassButton from "./ui/GlassButton";
import SectionReveal from "./ui/SectionReveal";

const EMAIL_ADDRESS = social.email.replace(/^mailto:/i, "").trim() || "you@example.com";

function buildMailtoLink(form: HTMLFormElement): string {
  const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value?.trim() ?? "";
  const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "";
  const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value?.trim() ?? "";
  const subject = "Contact from portfolio";
  const body = [name && `Name: ${name}`, email && `Email: ${email}`, message && `Message:\n${message}`]
    .filter(Boolean)
    .join("\n\n");
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  return `mailto:${EMAIL_ADDRESS}?${params.toString()}`;
}

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const mailto = buildMailtoLink(form);
    window.location.href = mailto;
  }

  return (
    <section id="contact">
      <SectionReveal>
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-links">
            <a
              href={social.github}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={social.email} className="contact-link">
              Email
            </a>
            {social.phone && (
              <a href={`tel:${social.phone}`} className="contact-link">
                Phone
              </a>
            )}
          </div>
          <GlassPanel className="contact-form-wrapper">
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact-input"
                autoComplete="name"
              />
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact-input"
                autoComplete="email"
              />
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact-input contact-textarea"
                rows={4}
              />
              <GlassButton type="submit">
                Send
              </GlassButton>
            </form>
          </GlassPanel>
        </div>
      </SectionReveal>
    </section>
  );
}
