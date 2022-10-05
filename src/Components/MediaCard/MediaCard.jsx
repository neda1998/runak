import React from "react";
import { useTranslation } from "react-i18next";
import insta from "../assets/images/Instagram-media-cart.svg";
import "./MediaCard.css";

const MediaCard = ({ img, txt, txtEnglish, number, price }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="d-flex flex-column go-social-media wrapper">
          <div className="checkbox-hover">
            <label className="option_item">
              <input type="checkbox" className="checkbox" />
              <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon"></div>
                <div className="name"></div>
                <div className="text-center pt-3">
                  <img src={img} alt="" className="img-fluid khatoon-img" />
                </div>
                <div className="text-center text-khatoon">
                  <h6>{txt}</h6>
                </div>
                <div className="text-center text-english">
                  <h6>{txtEnglish}</h6>
                </div>
                <div className="d-flex flex-row border-top-box">
                  <div className="d-flex flex-column border-left-box">
                    <div className="d-flex flex-row">
                      <div className="image-instag">
                        <img src={insta} alt="" className="image-instag" />
                      </div>
                      <div>
                        <span className="span-box-index2">{t("follower")}</span>
                      </div>
                    </div>
                    <div>
                      <span className="span-box-index2">{number}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column MediaCard-footer-item">
                    <div id="box-post">
                      <div>
                        <span className="span-box-index2">Post</span>
                      </div>
                      <div>
                        <span className="span-box-index2">\</span>
                      </div>
                      <div>
                        <span className="span-box-index2">Story</span>
                      </div>
                    </div>
                    <div>
                      <span className="span-box-index2">
                        {t("in")}{" "}
                        <span className="span-red-index2">{price}</span>{" "}
                        <span className="span-box-index2">
                          {t("txt_dollor")}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
