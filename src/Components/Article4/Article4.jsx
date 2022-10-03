import img from "../assets/images/Rectangle 12.svg";
import "./Article4.css";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Article4 = () => {
  const { t } = useTranslation();
  return (
    <section id="Article4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 order2">
            <div className="d-flex flex-column left-box">
              <div className="text-image">
                <h6>{t("marketing")}</h6>
              </div>
              <div className="text-span-main">
                <span>{t("article4")}</span>
              </div>
              <div className="btn-main-mid">
                <Nav.Link as={Link} to="/login">
                  <button className="fill-btn-right">{t("advertiser")}</button>
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

export default Article4;
