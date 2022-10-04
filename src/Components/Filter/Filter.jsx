import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import "./Filter.css";

const Filter = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="big-box" id="big-box">
        <div className="text-head-box">
          <span>{t("chooicing")}</span>
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t("topic")}</Accordion.Header>
            <Accordion.Body>
              <div className="dropdown-box-items" id="drop-box-item">
                <a href="#d">{t("topic1")}</a>
                <a href="#d">{t("topic2")}</a>
                <a href="#d">{t("topic3")}</a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="text-head-box">
          <span>{t("price")}</span>
        </div>
        <div className="d-flex flex-row button-index2">
          <div className="text-page2-box">
            <span>{t("in")}</span>
          </div>
          <div className="btn-price">
            <select className="button-select">
              <option value={t("dollor1")}>{t("dollor1")}</option>
              <option value={t("dollor2")}>{t("dollor2")}</option>
              <option value={t("dollor3")}>{t("dollor3")}</option>
            </select>
          </div>
          <div className="text-page2-box">
            <span>{t("to")}</span>
          </div>
          <div className="btn-price">
            <select className="button-select">
              <option value={t("dollor4")}>{t("dollor4")}</option>
              <option value={t("dollor5")}>{t("dollor5")}</option>
              <option value={t("dollor6")}>{t("dollor6")}</option>
            </select>
          </div>
        </div>
        <div className="text-head-box">
          <span>
            {t("number_of_followers")}
          </span>
        </div>
        <div className="d-flex flex-row button-index2">
          <div className="text-page2-box">
            <span>{t("in")}</span>
          </div>
          <div className="btn-price">
            <select className="button-select">
              <option value={t("combobox1")}>{t("combobox1")}</option>
              <option value={t("combobox2")}>{t("combobox2")}</option>
              <option value={t("combobox3")}>{t("combobox3")}</option>
            </select>
          </div>
          <div className="text-page2-box">
            <span>{t("to")}</span>
          </div>
          <div className="btn-price">
            <select className="button-select">
              <option value={t("combobox4")}>{t("combobox4")}</option>
              <option value={t("combobox5")}>{t("combobox5")}</option>
              <option value={t("combobox6")}>{t("combobox6")}</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="text-head-box">
            <span>
              {t("advertisment")}
            </span>
          </div>
          <div className="d-flex flex-row">
            <div>
              <input type="checkbox" name="" id="checkbox" />
            </div>
            <div className="story">
              <span>
                {t("story")}
              </span>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div>
              <input type="checkbox" name="" id="checkbox" />
            </div>
            <div className="story">
              <span>
                {t("Post")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
