import { companyStats } from "../constants/stats.js";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-rule" />
        <div className="about-grid">
          <div className="stat-block" data-reveal>
            {companyStats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>
                  {String(stat.value).padStart(2, "0")}
                  {stat.suffix}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="about-copy" data-reveal>
            <p className="section-label">About Vaahan</p>
            <h2>Precision engineering for a smarter mobility stack.</h2>
            <p>
              Vaahan International works across automotive software, education programs, and green mobility initiatives
              to help the industry move toward smarter, more connected transportation.
            </p>
            <p>
              Through VaahanXbit, VaahanXpedition, and VaahanXport, the company supports OEMs, Tier 1 suppliers,
              startups, institutions, and global customers with software-defined vehicle programs, hands-on innovation
              learning, and EV-focused electrical and electronic components.
            </p>
            <p className="brand-line">Don't just follow the future - we engineer it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
