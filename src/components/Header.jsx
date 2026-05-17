import "../styles/header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="creatus Technologies" />
      </div>

      <div className="header-right">
        <p>+61 123 456 789</p>
        <button>Request a Quote</button>
      </div>
    </header>
  );
}

export default Header;
