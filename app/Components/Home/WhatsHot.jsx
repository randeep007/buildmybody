import React from 'react';
import Slider from 'react-slick';
import {NavLink} from '@remix-run/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hot1 from '../../img/hot1.jpg';
import hot2 from '../../img/hot2.jpg';
import hot3 from '../../img/hot3.jpg';
import hot4 from '../../img/hot4.jpg';

const WhatsHot = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 3, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 576, // Small screens
        settings: {
          slidesToShow: 2, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <section id="whatshot">
      <div className="container pt-5">
        <div
          className="d-flex justify-content-center mb-5"
          style={{flexDirection: 'column', alignItems: 'center'}}
        >
          <h1 className="font-weight-bolder custom-heading4">
            <em>Hot Selling Products🔥</em>
          </h1>
          <hr className="h1-hr" />
        </div>
        <Slider {...settings}>
          <NavLink to="/product/insane-labz-psychotic-preworkout">
            <div className="slider-item p-2 text-dark">
              <img src={hot1} alt="" className="w-100" />
              <div className="mt-1">
                <p style={{fontWeight: '600', fontSize: '1.3rem'}}>
                  Insane Labz Psychotic Preworkout
                </p>
                <p style={{fontSize: '.9rem'}}>Flat 50% Off</p>
                <button id="flash-button" className="w-100 p-1">
                  Shop Now
                </button>
              </div>
            </div>
          </NavLink>
          <NavLink to="/product/genuine-enhanced-four">
            <div className="slider-item p-2 text-dark">
              <img src={hot2} alt="" className="w-100" />
              <div className="mt-1">
                <p style={{fontWeight: '600', fontSize: '1.3rem'}}>
                  Enhanced Athlete MK-677
                </p>
                <p style={{fontSize: '.9rem'}}>
                  Upto 40% off on Enhanced Athlete Products
                </p>
                <button id="flash-button" className="w-100 p-1">
                  Shop Now
                </button>
              </div>
            </div>
          </NavLink>
          <NavLink to="/product/mhp-xpel">
            <div className="slider-item p-2 text-dark">
              <img src={hot3} alt="" className="w-100" />
              <div className="mt-1">
                <p style={{fontWeight: '600', fontSize: '1.3rem'}}>
                  MHP XPEL, 80 Capsules
                </p>
                <p style={{fontSize: '.9rem'}}>Flat 43% Off</p>
                <button id="flash-button" className="w-100 p-1">
                  Shop Now
                </button>
              </div>
            </div>
          </NavLink>
          <NavLink to="/product/genuine-enhanced-two">
            <div className="slider-item p-2 text-dark">
              <img src={hot4} alt="" className="w-100" />
              <div className="mt-1">
                <p style={{fontWeight: '600', fontSize: '1.3rem'}}>
                  Enhanced Athlete Blue Ox
                </p>
                <p style={{fontSize: '.9rem'}}>
                  Upto 40% off on Enhanced Athlete Products.
                </p>
                <button id="flash-button" className="w-100 p-1">
                  Shop Now
                </button>
              </div>
            </div>
          </NavLink>
        </Slider>
      </div>
    </section>
  );
};

export default WhatsHot;
