import React from "react";
import { useEffect } from "react";
import PageSocialMedia from "./MediaPageHeader/MediaPageHeader";
import Advertise from "./Advertise/Advertise";
import Filter from "./Filter/Filter";
import MediaCards from "./MediaCards/MediaCards";
// import MediaCard from './MediaCard/MediaCard';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageSocialMedia />
      <Advertise />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Filter />
            </div>

            {/* <div className='col-lg-9 col-md-8 col-sm-12'>
              <div className="row">
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
              </div>
            </div> */}
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="row">
                <MediaCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
