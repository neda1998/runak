import img from "../assets/images/Rectangle 10.svg";
import "./Article2.css";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Article2 = () => {
  const { t } = useTranslation();
  return (
    <section id="Article2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 order2">
            <div className="d-flex flex-column left-box">
              <div className="text-image">
                <h6>{t("text_span_slideshow")}</h6>
              </div>
              <div className="text-span-main">
                <span>{t("article2")}</span>
              </div>
              <div className="btn-main-mid">
                <Nav.Link as={Link} to="/login">
                  <button className="fill-btn-right">{t("online")}</button>
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <button className="dark-fill-btn">{t("media_owner")}</button>
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 order1">
            <div className="article-img">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article2;
