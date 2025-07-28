import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer flex justify-evenly  sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <h3 className="footer-title">Services</h3>
        <Link className="link link-hover" to="/destinations">
          Destinations
        </Link>
      </nav>
      <nav>
        <h3 className="footer-title">Company</h3>
        <Link className="link link-hover" to="/about">
          About
        </Link>
        <Link className="link link-hover" to="/contact">
          Contact
        </Link>
      </nav>
      <nav>
        <h3 className="footer-title">Legal</h3>
        <Link className="link link-hover" to="/">
          Terms of use
        </Link>
        <Link className="link link-hover" to="/">
          Privacy policy
        </Link>
        <Link className="link link-hover" to="/">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
