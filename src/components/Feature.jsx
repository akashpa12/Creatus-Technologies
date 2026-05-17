import "../styles/featur.css";
import { FaFileAlt, FaTools, FaCheckCircle } from "react-icons/fa";

function Feature() {
  return (
    <section className="section">
      <h1>Scan to CAD & Reverse Engineering Services in NSW</h1>

      <p className="intro-text">
        We deliver precision reverse engineering and scan-to-CAD services for
        complex engineering projects across mining, manufacturing, automotive,
        and industrial sectors.
      </p>

      <h2>Tailored 3D Solutions for Your Complex Engineering Challenges</h2>

      <div className="feature-grid">
        <div className="feature-card">
          <FaFileAlt className="icon" />
          <h3>Stop Struggling with Dumb Files</h3>
          <p>Convert scan files into editable production-ready CAD.</p>
        </div>

        <div className="feature-card">
          <FaTools className="icon" />
          <h3>Eliminate Downtime from Missing Prints</h3>
          <p>Recreate missing or damaged parts accurately.</p>
        </div>

        <div className="feature-card">
          <FaCheckCircle className="icon" />
          <h3>Zero-Fitment Risk</h3>
          <p>Ensure accurate fitting and seamless manufacturing.</p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
