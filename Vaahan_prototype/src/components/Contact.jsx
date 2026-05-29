export default function Contact() {
  return (
    <section id="contact" className="section dark-section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="section-label">Contact</p>
          <h2>Bring the next mobility program into focus.</h2>
          <p>
            For automotive software, embedded systems, EV components, or institutional innovation programs, start with a
            focused conversation.
          </p>
          <a className="contact-email" href="mailto:exim@vaahan-international.com">
            exim@vaahan-international.com
          </a>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.vaahan-international.com/" target="_blank" rel="noreferrer">
              Web
            </a>
            <a href="https://www.linkedin.com/company/vaahan-international/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/vaahan_international" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>

        <form className="contact-form" data-reveal>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" />
          </label>
          <button className="button button-accent" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
