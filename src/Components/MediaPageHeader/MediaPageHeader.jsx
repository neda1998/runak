import React from "react";
import logo from "../assets/images/logo.svg";
import "./MediaPageHeader.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MultiLanguage from "../MultiLanguage/MultiLanguage";
import { Nav } from "react-bootstrap";

const MediaPageHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <header className="header-index2">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="logo-index2 d-flex">
                  <img src={logo} alt="" className="img-fluid" />
                  <Link className="nav-link-page2 p-2" to="/home">
                    {t("runak")}
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-6 col-sm-12">
                <div className="search-box" id="search">
                  <div className="search-index2">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="input-search-box">
                    <input type="text" placeholder={t("input")} />
                  </div>
                  <Nav.Link>
                    <MultiLanguage />
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default MediaPageHeader;
