import Icon from "./Icon.jsx";

function MobilityCircuit() {
  return (
    <div className="mobility-circuit" aria-hidden="true">
      <svg viewBox="0 0 620 620" role="img">
        <defs>
          <filter id="amberGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="grid-line" d="M86 92H472c38 0 68 30 68 68v318" />
        <path className="grid-line" d="M118 512h250c34 0 62-28 62-62V184" />
        <path className="grid-line" d="M150 164h166c35 0 64 29 64 64v208" />
        <path className="trace trace-one" d="M78 456h146c41 0 74-33 74-74V226c0-40 32-72 72-72h158" />
        <path className="trace trace-two" d="M108 112h122c31 0 56 25 56 56v80c0 31 25 56 56 56h152" />
        <path className="trace trace-three" d="M142 548h288c47 0 86-38 86-86V238" />
        <g className="nodes">
          <circle cx="78" cy="456" r="5" />
          <circle cx="528" cy="154" r="5" />
          <circle cx="494" cy="304" r="5" />
          <circle cx="516" cy="238" r="5" />
          <circle cx="142" cy="548" r="5" />
          <circle cx="108" cy="112" r="5" />
        </g>
      </svg>
      <div className="circuit-readout">
        <span>SDV</span>
        <span>EMBEDDED</span>
        <span>EV</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="section-label">Engineering the future of mobility</p>
          <h1>Where Software Meets the Road</h1>
          <p className="hero-text">
            Vaahan International builds automotive software, embedded intelligence, and green mobility solutions for
            companies moving from mechanical platforms to connected ecosystems.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" href="#services">
              Explore Solutions
              <Icon name="arrow" size={18} />
            </a>
            <a className="button button-ghost" href="#about">
              Our Story
            </a>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <MobilityCircuit />
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  );
}
