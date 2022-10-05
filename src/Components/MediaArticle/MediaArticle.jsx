import React from "react";
import { Link } from "react-router-dom";
import "./MediaArticle.css";
import img10 from "../assets/images/Ellipse-10.svg";
import img9 from "../assets/images/Ellipse-9.svg";
import img8 from "../assets/images/Ellipse-8.svg";
import img7 from "../assets/images/Ellipse-7.svg";
import img6 from "../assets/images/Ellipse-6.svg";
import img5 from "../assets/images/Ellipse-5.svg";
import img4 from "../assets/images/Ellipse-4.svg";
import img3 from "../assets/images/Ellipse-3.svg";
import { useTranslation } from "react-i18next";

const MediaArticle = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="social-media">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="center-align">
                  <Link className="span" to="/medias">
                    <button className="btn-more-media">
                      {t("page-media")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex flex-row img-social">
                  <div className="img-group">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img10} alt="" />
                    </a>
                  </div>
                  <div className="img-group">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img9} alt="" />
                    </a>
                  </div>
                  <div className="img-group">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img8} alt="" />
                    </a>
                  </div>
                  <div className="img-group">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img7} alt="" />
                    </a>
                  </div>
                  <div className="img-group hide-mobile">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img6} alt="" />
                    </a>
                  </div>
                  <div className="img-group hide-mobile">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img5} alt="" />
                    </a>
                  </div>
                  <div className="img-group hide">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img4} alt="" />
                    </a>
                  </div>
                  <div className="img-group hide">
                    <a href="#ddd" alt="">
                      {" "}
                      <img src={img3} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MediaArticle;
