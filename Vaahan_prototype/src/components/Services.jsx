import { services } from "../constants/services.js";
import Icon from "./Icon.jsx";

export default function Services() {
  return (
    <section id="services" className="section dark-section services-section">
      <div className="container">
        <div className="section-kicker" data-reveal>
          <p className="section-label">Products and services</p>
          <h2>Focus areas built for the next vehicle architecture.</h2>
        </div>
        <div className="services-grid" data-reveal>
          {services.map((service) => (
            <article className="service-card" key={service.key}>
              <div className="service-icon">
                <Icon name={service.icon} size={30} />
              </div>
              <p>{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <span>{service.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
