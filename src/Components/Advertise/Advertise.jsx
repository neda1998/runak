import React from 'react';
import advertiseIcon from '../assets/images/advertise.svg';
import './Advertise.css';
import { Link } from 'react-router-dom';

const Advertise = () => {
  return (
    <>
    <section>
      <div className="container">
       <div className="d-flex flex-row reklam-box">
        <div className="d-flex flex-row reklam-insta">
          <div className="d-flex flex-row">
            <div className='img-advertise'>
              <img
                src={advertiseIcon}
                alt=""
              />
            </div>
            <div className="text-imp">
              <span>
                ڕیکلامکردن لە ئینستاگرام
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="btn-main-index2">
            <Link to="/media" alt="">
              <button>
                من دەمەوێت پارە پەیدا بکەم
              </button>
            </Link>
          </div>
          <div className="btn-right-index2">
            <a href="#ddd" alt="">
              <button>
                من دەمەوێت ریکلام بکەم
              </button>
            </a>
          </div>
        </div>
       </div>
      </div>
    </section>
    </>
  )
}

export default Advertise