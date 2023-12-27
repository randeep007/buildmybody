import {Link, useLoaderData} from '@remix-run/react';
import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import Slider from 'react-slick';

const FeaturedProducts = ({collections}) => {


  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    console.log(collections);
    setNav2(slider2.current);
  }, []);

  return (
    <section id="product-card " data-aos="fade-up">
      <div className="container-fluid" id="cgap">
        <div
          className="d-flex justify-content-center mb-5"
          style={{flexDirection: 'column', alignItems: 'center'}}
        >
          <h1 className="font-weight-bold custom-heading1">
            <em>Shop by Category</em>
          </h1>
          <hr className="h1-hr" />
        </div>

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
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true,
                nextArrow: <></>,
                prevArrow: <></>,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                nextArrow: <></>,
                prevArrow: <></>,
              },
            },
          ]}
        >
          {collections.nodes.map((collection) => (
            <div
              className="card"
              style={{width: '18rem', paddingBottom: ''}}
              id="cgap"
              key={collection.id}
            >
              <Link to={`/products/${collection.handle}`}>
                <img
                  className="card-img-top"
                  src={collection.image?.url || ''}
                  alt="Card image cap"
                />
              </Link>
              <div className="card-content">
                <Link
                  to={`/products/${collection.handle}`}
                  className=" btn category-btn  d-flex justify-content-center mt-4"
                >
                  Shop now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
