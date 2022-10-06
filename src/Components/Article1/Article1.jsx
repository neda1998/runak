import React from "react";
import img from "../assets/images/img.svg";
import "./Article1.css";
import { useTranslation } from "react-i18next";

const Article1 = () => {
  const { t } = useTranslation();
  return (
    <section id="Article1">
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
                <h6>{t("our_service")}</h6>
              </div>
              <div className="text-span-main">
                <span>{t("article1")}</span>
              </div>
              <div className="outline-btn">
                <a href="https://t.me/runak_support" alt="">
                  <button>{t("txt")}</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article1;
