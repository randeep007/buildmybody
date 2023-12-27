import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { useRef } from 'react';
import bc1 from '../../img/bc1.jpg';
import bc2 from '../../img/bc2.jpg';
import bc3 from '../../img/bc3.jpg';
import bc4 from '../../img/bc4.jpg';
import bc5 from '../../img/bc5.jpg';
import bc6 from '../../img/bc6.jpg';
const Brand = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);
    return (
        <div>
            <section id="brand-car">
                <div className="container-fluid">
                    <div
                        className="d-flex justify-content-center"
                        style={{ flexDirection: 'column', alignItems: 'center' }}
                    >
                        <h1 className="font-weight-bold custom-heading3">
                            <em>Brands</em>
                        </h1>
                        <hr className="h1-hr" />
                    </div>
                    <div className="brands-slider">
                        <Slider
                            className="ml-lg-5 mr-lg-5"
                            asNavFor={nav1}
                            ref={slider2}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                        infinite: true,
                                        dots: true,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                        initialSlide: 2,
                                        dots: true,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        dots: true,
                                    },
                                },
                            ]}
                        >
                            <div className="card  d-flex justify-content-center">
                                <img
                                    className="card-img-brand	  "
                                    src={bc1}
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card  d-flex justify-content-center">
                                <img
                                    className="card-img-brand  "
                                    src={bc2}
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card   d-flex justify-content-center">
                                <img
                                    className="card-img-brand  "
                                    src={bc3}
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card   d-flex justify-content-center">
                                <img
                                    className="card-img-brand  "
                                    src={bc4}
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card   d-flex justify-content-center">
                                <img
                                    className="card-img-brand  "
                                    src={bc5}
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card  d-flex justify-content-center">
                                <img
                                    className="card-img-brand  "
                                    src={bc6}
                                    alt="Card image cap"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Brand
