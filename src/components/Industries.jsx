import "../styles/industries.css";

function Industries() {
  return (
    <section className="section">
      <h2>Comprehensive Scan-to-CAD Workflows for Every Industry</h2>

      <div className="industry-grid">
        <div className="industry-card">
          <h3>Mining & Heavy Industry</h3>
          <p>Precision modeling for industrial equipment.</p>
        </div>

        <div className="industry-card">
          <h3>Automotive & Aerospace</h3>
          <p>High-accuracy reverse engineering workflows.</p>
        </div>

        <div className="industry-card">
          <h3>Manufacturing</h3>
          <p>Production-ready CAD conversion services.</p>
        </div>

        <div className="industry-card">
          <h3>Architecture & Heritage</h3>
          <p>Detailed restoration and preservation models.</p>
        </div>
      </div>
    </section>
  );
}

export default Industries;
