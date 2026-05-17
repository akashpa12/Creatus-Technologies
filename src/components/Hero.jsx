import "../styles/hero.css";
import photo from "../assets/photo.avif";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Convert Physical Parts to Production-Ready CAD Models</h1>

        <p>
          High-accuracy reverse engineering for manufacturing, mining, and
          automotive. Get STL to STEP/IGES conversion with guaranteed accuracy.
        </p>

        <button>Request a Quote</button>
      </div>

      <div className="hero-image">
        <img src={photo} alt="Engineering" />
      </div>
    </section>
  );
}
export default Hero;
