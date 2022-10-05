import { useForm } from "react-hook-form";
import "./Signup.css";
import img from "../assets/images/image.svg";
import React from "react";
import BackHeader from "../Back/Back";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({ reValidateMode: "onSubmit" });
  const onSubmit = () => null;
  const firstName = register("firstName", { required: true });
  const phoneNumber = register("phoneNumber", { required: true });
  const email = register("email", { required: true });
  const password = register("password", { required: true });
  const { t } = useTranslation();

  return (
    <>
      <BackHeader />
      <div className="parent">
        <div className="img-right-login">
          <img src={img} alt="" />
        </div>
        <div className="form-login-page">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="box">
              <h3 class="text">{t("create_acount")}</h3>
              <hr class="line" />
            </div>
            <br />
            <br />
            <input
              className="input-login"
              {...firstName}
              onChange={(e) => {
                firstName.onChange(e);
                clearErrors("firstName");
              }}
              placeholder={t("name")}
            />
            {errors.firstName?.type === "required" && "*"}

            <input
              className="input-login"
              {...phoneNumber}
              onChange={(e) => {
                phoneNumber.onChange(e);
                clearErrors("phoneNumber");
              }}
              placeholder={t("phone_number")}
            />
            {errors.phoneNumber && "*"}

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

            <button type="submit" className="btn-login-page">
              {t("register")}
            </button>
            <div className="text-login">
              <span>
                بە ناو تۆمارکردن لە رۆناک، ڕازی دەبیت لەسەر پابەندبوون بە
                <span className="text-red-login">مەرجەکان</span>
                <span className="text-red-login">یان یاساکان.</span>
              </span>
            </div>
            <div className="account">
              <div className="login-options">
                <span>{t("acount")}</span>
                <span className="text-red-login">
                  <Nav.Link as={Link} to="/login">
                    {t("login‌")}
                  </Nav.Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
