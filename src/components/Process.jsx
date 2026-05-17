import "../styles/process.css";

function Process() {
  return (
    <section className="section">
      <h2>Our 3-Step Reverse Engineering Process</h2>

      <div className="process-grid">
        <div className="process-card">
          <span>1</span>
          <h3>Precision 3D Scanning</h3>
        </div>

        <div className="process-card">
          <span>2</span>
          <h3>Point Cloud Processing</h3>
        </div>

        <div className="process-card">
          <span>3</span>
          <h3>Parametric Modeling</h3>
        </div>
      </div>
    </section>
  );
}

export default Process;
