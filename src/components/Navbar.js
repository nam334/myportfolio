import { useState } from "react";
import logo from "../assets/newlogo.svg";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import "./Navbar.scss";

const Navbar = (props) => {
  const {
    brandlogo,

    navbarCustomdivComponent,
    ...rest
  } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let lin = [
    { name: "Home", href: "#", icon: "@" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact", href: "#" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenuOnClick = () => {
    if (window.innerWidth <= 600) {
      // For mobile devices only
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Element name="Home" className="element">
        <nav className="navbar">
          {window.innerWidth < 600 && isMenuOpen ? null : (
            <div className="navbar-logo">
              <img src={logo} alt="Crazebazar" />
            </div>
          )}

          <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            {window.innerWidth < 1280 ? (
              <li className="navbar-close" onClick={toggleMenu}>
                &times;
              </li>
            ) : null}

            {isMenuOpen ? (
              <div className="navbar-links-items">
                <div className="navbar-logo">
                  <img src={logo} alt="Crazebazar" />
                </div>
                <div className="navbar-links-items-list">
                  {lin.map((link, index) => (
                    <>
                      {/* <li key={index} className="navbar-item">
                      <NavLink
                        to={link?.href}
                        className="navbar-link"
                        activeClassName="active-link"
                      >
                        {link.label}
                      </NavLink>  */}

                      <Link
                        to={link?.name}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="navbar-link"
                        onClick={closeMenuOnClick}
                      >
                        <li key={index} className="navbar-item">
                          <span className="vendorsidenav-nav-list-nav-item-nav-text">
                            {link.name}
                          </span>
                        </li>
                      </Link>

                      {/* </li> */}
                    </>
                  ))}
                </div>
              </div>
            ) : null}
            {!isMenuOpen
              ? lin.map((link, index) => (
                  <>
                    <li key={index} className="navbar-item">
                      <Link
                        to={link?.name}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="navbar-link"
                        activeClassName="active-link"
                      >
                        {link.name}
                      </Link>
                    </li>
                  </>
                ))
              : null}
          </ul>

          {isMenuOpen && (
            <div className="navbar-overlay" onClick={toggleMenu}></div>
          )}
          <div className="navbar-hamburger" onClick={toggleMenu}>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
          </div>
        </nav>
        {/* Backdrop when sidenav is open */}
        {isMenuOpen && <div className="backdrop"></div>}
      </Element>
    </>
  );
};

export default Navbar;
