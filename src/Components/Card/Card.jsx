import React from "react";
import "./Card.css";
import { Link } from "react-scroll";

const Card = ({ text, image,to }) => {
  return (
    <>
      <div className="col-lg-2-5 col-md-4 col-sm-12">
        <div className="d-flex flex-column boxes-main">
          <Link
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            offset={-30}
            duration={100}
            href=""
          >
            <div>
              <img src={image} alt="img" />
            </div>
            <div className="txt-box-main">
              <h6>{text}</h6>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
