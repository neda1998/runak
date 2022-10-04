import React from "react";
import "./Header.css";
import img from "../assets/images/logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Link as LinkUrl } from "react-scroll";
import { useTranslation } from "react-i18next";
import MultiLanguage from "../MultiLanguage/MultiLanguage";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar className="shadow-4 menu-header" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand" as={Link} to="/home">
            <img src={img} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkUrl
                activeClass="active"
                to="Articles"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                as={Link}
              >
                <Nav.Link as={Link} to="/home">
                  {t("runak")}
                </Nav.Link>
              </LinkUrl>
              <LinkUrl
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                as={Link}
              >
                <Nav.Link>{t("service")}</Nav.Link>
              </LinkUrl>
              <Nav.Link as={Link} to="/medias">
                {t("midia")}
              </Nav.Link>
              <LinkUrl
                activeClass="active"
                to="footers"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                as={Link}
              >
                <Nav.Link>{t("career opportunities")}</Nav.Link>
              </LinkUrl>
              <Nav.Link as={Link} to="/about">
                {t("contact")}
              </Nav.Link>
              <LinkUrl
                activeClass="active"
                to="footers"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                as={Link}
              >
                <Nav.Link>{t("about us")}</Nav.Link>
              </LinkUrl>
              <Nav.Link as={Link} to="/login">
                {t("login")}
              </Nav.Link>
              <Nav.Link>
                <MultiLanguage />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default Header;
