import React from 'react'
import Slider from 'react-slick';
import { NavLink } from '@remix-run/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pre from '../../img/pre.png'
const Offers = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Show 3 slides on large screens
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
        <div className='container'>
            <div className='text-center carousel'>
                <h1 class="font-weight-bold custom-heading3" style={{ paddingTop: '0rem' }}>
                    <em> Special offers </em>
                </h1>
                {/* <p>Best deals on individual products picked for you. Shop Now to grab the deals!</p> */}
                <p>You Can Apply These Offers In The Checkout --------&#62;</p>
            </div>
            <Slider {...settings}>
                {/* Your components go here */}

                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>BMB Shaker @ Rs. 199 | 76% Off | MRP: 849
                        </p>
                        {/* <p style={{ fontSize: '.9rem' }}>Flat 50% Off</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>




                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>BMB High Protein Muesli 400g @ Rs. 285</p>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Chocolate Peanut Butter 340 g @ Rs. 149 Only
                        </p>
                        {/* <p style={{ fontSize: '.9rem' }}>Flat 43% Off</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>BMB Gym Bag @ Rs. 299 | 83% Off | MRP: 1199
                        </p>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Fish Oil 30 Caps @ Rs 279 | 30% Off | MRP: 399
                        </p>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Ashwagandha 60 Tabs @ Rs. 259 | 35% Off | MRP: 399

                        </p>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>BMB-VITE 30 Tabs @ Rs 299 only | 21% Off | MRP: 379

                        </p>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>BMB High Protein Oats @ Rs. 79

                        </p>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Offers
