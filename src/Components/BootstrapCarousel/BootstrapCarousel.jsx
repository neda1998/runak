import img1 from "../assets/images/image 25.svg";
import Carousel from "react-bootstrap/Carousel";
import "./BootstrapCarousel.css";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function BootstrapCarousel() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container go-bottom slider-filter">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Carousel>
            <Carousel.Item>
                <div className="item">
                  <div className="head-slide">
                    <h2>{t("text_header_slideshow")}</h2>
                  </div>
                  <div className="span-slide">
                    <span>{t("text_span_slideshow")}</span>
                  </div>
                  <div className="d-flex flex-row button-slide">
                    <Nav.Link as={Link} to="/login">
                      <button className="fill-btn-right">
                      {t("online")}
                      </button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                      <button className="btn-slide">
                      {t("media_owner")}
                      </button>
                    </Nav.Link>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item">
                  <div className="head-slide">
                    <h2>{t("text_header_slideshow")}</h2>
                  </div>
                  <div className="span-slide">
                    <span>
                    {t("reklam")} 
                    </span>
                  </div>
                  <div className="button-slide">
                    <a href="https://t.me/runak_support">
                      <button className="fill-btn-right">
                      {t("txt")}</button>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item">
                  <div className="head-slide">
                    <h2>{t("text_header_slideshow")}</h2>
                  </div>
                  <div className="span-slide">
                    <span>{t("txt-span")}</span>
                  </div>
                  <div className="d-flex flex-row button-slide">
                    <a href="https://t.me/runak_support">
                      <button className="fill-btn-right">
                      {t("txt")}</button>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="img-slider-co">
              <img src={img1} alt="" className="img-fluid image-slide-site"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BootstrapCarousel;
