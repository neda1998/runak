import img from "../assets/images/Rectangle 11.svg";
import React from "react";
import "./Article3";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Article3 = () => {
  const { t } = useTranslation();
  return (
    <section id="Article3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="article-img">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="d-flex flex-column left-box">
              <div className="text-image">
                <h6>{t("show")}</h6>
              </div>
              <div className="text-span-main">
                <span>{t("article3")}</span>
              </div>
              <div className="btn-main-mid">
                <Nav.Link as={Link} to="/login">
                  <button className="fill-btn-right">{t("advertiser")}</button>
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <button className="dark-fill-btn">{t("publisher")}</button>
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article3;
