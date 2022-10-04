import React from "react";
import "./Back.css";
import img from "../assets/images/logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Link as LinkUrl } from "react-scroll";
import MultiLanguage from "../MultiLanguage/MultiLanguage";
import { useTranslation } from "react-i18next";

const Back = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
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
                å
                duration={100}
                as={Link}
              >
                <Nav.Link as={Link} to="/home">
                  {t("runak")}
                </Nav.Link>
              </LinkUrl>
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

export default Back;
