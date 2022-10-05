import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import img1 from "../assets/images/Ellipse-4.svg";
import img2 from "../assets/images/Ellipse-5.svg";
import img3 from "../assets/images/Ellipse-9.svg";
import img4 from "../assets/images/Ellipse-3.svg";
import img5 from "../assets/images/Ellipse-7.svg";
import img6 from "../assets/images/Ellipse-10.svg";
import img7 from "../assets/images/Ellipse-8.svg";
import img8 from "../assets/images/Ellipse-6.svg";
import { useTranslation } from "react-i18next";

const MediaCards = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div class="row">
        <MediaCard
          img={img1}
          txt={t("page_of_social_media1")}
          txtEnglish={t("page_of_social_media1")}
          number={t("thousand1")}
          price="30"
        />
        <MediaCard
          img={img2}
          txt={t("page_of_social_media3")}
          txtEnglish={t("page_of_social_media3")}
          number={t("thousand8")}
          price="5"
        />
        <MediaCard
          img={img3}
          txt={t("page_of_social_media2")}
          txtEnglish={t("page_of_social_media2")}
          number={t("thousand2")}
          price="150"
        />
        <MediaCard
          img={img4}
          txt={t("page_of_social_media8")}
          txtEnglish={t("page_of_social_media8")}
          number={t("thousand3")}
          price="100"
        />
        <MediaCard
          img={img5}
          txt={t("page_of_social_media4")}
          txtEnglish={t("page_of_social_media4")}
          number={t("thousand3")}
          price="100"
        />
        <MediaCard
          img={img6}
          txt={t("page_of_social_media7")}
          txtEnglish={t("page_of_social_media7")}
          number={t("thousand4")}
          price="15"
        />
        <MediaCard
          img={img7}
          txt={t("page_of_social_media6")}
          txtEnglish={t("page_of_social_media6")}
          number={t("thousand5")}
          price="20"
        />
        <MediaCard
          img={img8}
          txt={t("page_of_social_media5")}
          txtEnglish={t("page_of_social_media5")}
          number={t("thousand7")}
          price="5"
        />
        <MediaCard
          img={img1}
          txt={t("page_of_social_media1")}
          txtEnglish={t("page_of_social_media1")}
          number={t("thousand1")}
          price="30"
        />
        <MediaCard
          img={img2}
          txt={t("page_of_social_media3")}
          txtEnglish="xatun"
          number={t("thousand8")}
          price="5"
        />
        <MediaCard
          img={img3}
          txt={t("page_of_social_media2")}
          txtEnglish={t("page_of_social_media2")}
          number={t("thousand2")}
          price="150"
        />
        <MediaCard
          img={img4}
          txt={t("page_of_social_media8")}
          txtEnglish={t("page_of_social_media8")}
          number={t("thousand3")}
          price="100"
        />
        <MediaCard
          img={img5}
          txt={t("page_of_social_media4")}
          txtEnglish={t("page_of_social_media4")}
          number={t("thousand3")}
          price="100"
        />
        <MediaCard
          img={img6}
          txt={t("page_of_social_media7")}
          txtEnglish={t("page_of_social_media7")}
          number={t("thousand4")}
          price="15"
        />
        <MediaCard
          img={img7}
          txt={t("page_of_social_media6")}
          txtEnglish={t("page_of_social_media6")}
          number={t("thousand5")}
          price="20"
        />
        <MediaCard
          img={img8}
          txt={t("page_of_social_media5")}
          txtEnglish={t("page_of_social_media5")}
          number={t("thousand7")}
          price="5"
        />
        <MediaCard
          img={img1}
          txt={t("page_of_social_media1")}
          txtEnglish={t("page_of_social_media1")}
          number={t("thousand1")}
          price="30"
        />
        <MediaCard
          img={img2}
          txt={t("page_of_social_media3")}
          txtEnglish="xatun"
          number={t("thousand8")}
          price="5"
        />
        <MediaCard
          img={img3}
          txt={t("page_of_social_media2")}
          txtEnglish={t("page_of_social_media2")}
          number={t("thousand2")}
          price="150"
        />
        <MediaCard
          img={img4}
          txt={t("page_of_social_media8")}
          txtEnglish={t("page_of_social_media8")}
          number={t("thousand3")}
          price="100"
        />
        <MediaCard
          img={img5}
          txt={t("page_of_social_media4")}
          txtEnglish={t("page_of_social_media4")}
          number={t("thousand3")}
          price="100"
        />
        <MediaCard
          img={img6}
          txt={t("page_of_social_media7")}
          txtEnglish={t("page_of_social_media7")}
          number={t("thousand4")}
          price="15"
        />
        <MediaCard
          img={img7}
          txt={t("page_of_social_media6")}
          txtEnglish={t("page_of_social_media6")}
          number={t("thousand5")}
          price="20"
        />
        <MediaCard
          img={img8}
          txt={t("page_of_social_media5")}
          txtEnglish={t("page_of_social_media5")}
          number={t("thousand7")}
          price="5"
        />
      </div>
    </div>
  );
};

export default MediaCards;
