import instagramImage from "../assets/images/Instagram.svg";
import viberImage from "../assets/images/Viber.svg";
import linkedinImage from "../assets/images/Linkedin.svg";
import weChatImage from "../assets/images/WeChat.svg";
import telegramImage from "../assets/images/Telegram.svg";
import youtubeImage from "../assets/images/Youtube.svg";
import twitterImage from "../assets/images/Twitter.svg";
import facebookImage from "../assets/images/Facebook.svg";
import "./Footer.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <section id="footers">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-h4" id="list7">
                <h4 className="text-center">{t("social_media")}</h4>
              </div>
              <div className="d-flex flex-row footer-icons">
                <div className="d-flex flex-column">
                  <a href="https://www.linkedin.com/company/runak-co/">
                    <img src={linkedinImage} alt="linkedin page" />
                  </a>
                </div>
                <div className="d-flex flex-column">
                  <img src={instagramImage} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <a href="https://www.facebook.com/runak.net">
                    <img src={facebookImage} alt="facebook page" />
                  </a>
                </div>
                <div className="d-flex flex-column">
                  <a href="https://www.youtube.com/channel/UCBKdU77o4LOwSiC_B0XLI0w">
                    <img src={youtubeImage} alt="youtube channel" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex flex-column" id="list8">
                <div className="footer-h4">
                  <h4 className="text-center">{t("contact_with_runak")}</h4>
                </div>
                <div className="d-flex flex-column text-center footer-end">
                  <div className="address">
                    <span>{t("address")}: www.runak.net</span>
                  </div>
                  <div className="address">
                    <span> {t("phone_number")}: +۹۶۸۷۳۲۴۲۱۲</span>
                  </div>
                  <div className="address">
                    <span>{t("email")}: info@runak.net</span>
                  </div>
                </div>
                <div className="box-subs" id="box-subs">
                  <span>
                    <a href="mailto:info@runak.net">{t("send_letter")}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
