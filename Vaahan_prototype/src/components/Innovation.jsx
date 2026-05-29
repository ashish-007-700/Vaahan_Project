import { useEffect, useRef, useState } from "react";
import { counterStats } from "../constants/stats.js";

const features = [
  {
    title: "Software-Defined Vehicles",
    description: "Architecture, middleware, and software programs designed for vehicles that improve over time."
  },
  {
    title: "Embedded Intelligence",
    description: "Controller-level logic and applied AI that connect sensing, actuation, diagnostics, and data."
  },
  {
    title: "Green Mobility Stack",
    description: "EV components, power electronics, and partner ecosystems that support cleaner transportation."
  }
];

function Counter({ value, suffix, label, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1100;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [active, value]);

  return (
    <div className="counter">
      <strong>
        {String(count).padStart(value < 10 ? 2 : 0, "0")}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function Innovation() {
  const [active, setActive] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="innovation" className="section innovation-section">
      <div className="container">
        <div className="section-rule" />
        <div className="section-kicker" data-reveal>
          <p className="section-label">Innovation stack</p>
          <h2>Built Different.</h2>
        </div>

        <div className="roadmap" data-reveal>
          {features.map((feature, index) => (
            <article className="roadmap-item" key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <blockquote data-reveal>We don't build products. We engineer ecosystems.</blockquote>

        <div className="counter-grid" ref={statsRef} data-reveal>
          {counterStats.map((stat) => (
            <Counter key={stat.label} active={active} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
