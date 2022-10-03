import "./Article6.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Article6 = () => {
  const { t } = useTranslation();
  return (
    <section id="abouts">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="back-gray">
              <div className="text-center notes">
                <span>{t("start")}</span>
              </div>
              <div className="para-box">
                <span>{t("start_article")}</span>
              </div>
              <div className="outline-btn bn">
                <a href="https://t.me/runak_support" alt="">
                  <button className="text-center">{t("txt")}</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article6;
