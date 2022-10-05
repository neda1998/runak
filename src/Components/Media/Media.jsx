import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Media.css";
import Back from "../Back/Back";

const Media = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({ reValidateMode: "onSubmit" });
  const onSubmit = () => null;
  const email = register("email", { required: true });
  const password = register("password", { required: true });
  const { t } = useTranslation();
  return (
    <>
      <Back />
      <div className="form-login-page">
        <form onSubmit={handleSubmit(onSubmit)} className="form-media">
          <div className="box">
            <h3 className="text">{t("acount_login")}</h3>
            <hr className="line" />
          </div>
          <br />
          <br />
          <input
            className="input-login"
            {...email}
            onChange={(e) => {
              email.onChange(e);
              clearErrors("email");
            }}
            placeholder={t("email")}
          />
          {errors.email && "*"}
          <input
            className="input-login"
            type="password"
            {...password}
            onChange={(e) => {
              password.onChange(e);
              clearErrors("password");
            }}
            placeholder={t("password")}
          />
          {errors.password && "*"}
          <input
            className="input-login"
            type="password"
            {...password}
            onChange={(e) => {
              password.onChange(e);
              clearErrors("password");
            }}
            placeholder={t("password")}
          />
          {errors.password && "*"}
          <input
            className="input-login"
            type="password"
            {...password}
            onChange={(e) => {
              password.onChange(e);
              clearErrors("password");
            }}
            placeholder={t("password")}
          />
          {errors.password && "*"}{" "}
          <input
            className="input-login"
            type="password"
            {...password}
            onChange={(e) => {
              password.onChange(e);
              clearErrors("password");
            }}
            placeholder={t("password")}
          />
          {errors.password && "*"}{" "}
          <input
            className="input-login"
            type="password"
            {...password}
            onChange={(e) => {
              password.onChange(e);
              clearErrors("password");
            }}
            placeholder={t("password")}
          />
          {errors.password && "*"}
          <button type="submit" className="btn-login-page">
            {t("login")}
          </button>
          <div className="account">
            <div className="login-options">
              <span>{t("acount")}</span>
              <span className="text-red-login">
                <Nav.Link as={Link} to="/signup">
                  {t("register")}
                </Nav.Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Media;
