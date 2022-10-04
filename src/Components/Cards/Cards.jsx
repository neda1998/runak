import React from "react";
import "./Cards.css";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import image from "../assets/images/image 9.svg";
import image1 from "../assets/images/image 8.svg";
import image2 from "../assets/images/image 7.svg";
import image3 from "../assets/images/image 6.svg";
import image4 from "../assets/images/image 5.svg";

const Cards = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="txt-boxes">
                <h3 className="text-center">{t("our_service")}</h3>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
          <Card image={image} 
          text={t("our_service")}
          to="Article1"/>
          <Card image={image1}
           text={t("text_span_slideshow")}
           to="Article2" />
          <Card image={image2} 
          text={t("show")}
          to="Article3"/>
          <Card image={image3}
          text={t("marketing")}
            to="Article4" />
          <Card image={image4}
           text={t("reklam")}
           to="Article5"/>     
      </div>
    </div>
  );
};

export default Cards;