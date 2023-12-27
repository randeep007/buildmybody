import { Link } from '@remix-run/react';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import ProductForm from '../Product/ProductForm';


const FlashDeals = ({ collection }) => {

  function calculateDiscountPercentage(mrp, discountedPrice) {
    const discount = ((mrp - discountedPrice) / mrp) * 100;
    return discount.toFixed(2);
  }


  const [nav1, setNav1] = useState();
  const products = collection.collection.products;
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <section id="trending-products" data-aos="fade-up">
        <div className="container-fluid  py-5">
          <div
            className="d-flex justify-content-center mb-5"
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <h1 className="font-weight-bold custom-heading3">
              <em>Trending Products </em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="tab-content " id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container-fluid" id="wheyprotein">
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
                      breakpoint: 969,
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
                  {products.nodes.map((product) => (
                    <div className="card" id="trend-card" key={product.id}>
                      <Link
                        to={`/product/${product.handle}`}
                        className="d-flex justify-content-center"
                        id="trending-card-container"
                      >
                        <img
                          className="card-img-trending"
                          src={product.variants.nodes[0].image?.url || ''}
                          alt={product.variants.nodes[0].image?.altText}
                        />
                        <div style={{ position: 'relative', top: '25px', left: '-87px' }}>
                        <p style={{color:"#ff2828"}}>
                        {' '}
                        {calculateDiscountPercentage(
                          product.variants.nodes[0]?.compareAtPrice?.amount ||
                            0,
                          product.variants.nodes[0]?.price?.amount || 0,
                        )}
                        %
                      </p>
                        </div>
                      </Link>
                      <div className="card-content ml-3 mr-3" id="pricing">
                        <Link to={`/product/${product.handle}`}>
                          <h5
                            className="d-flex justify-content-center mt-5 text-center product-title"
                            style={{ fontSize: '1.1rem' }}
                          >
                            {product.title}
                          </h5>

                          <p className="d-flex justify-content-center font-weight-bold mt-3">
                            <h4>
                              {product.variants.nodes[0].compareAtPrice && (
                                <del className="discount-text">
                                  ₹{product.variants.nodes[0].compareAtPrice.amount}
                                </del>
                              )}{' '}
                              <span className='text-dark'>
                                ₹ {product.variants.nodes[0].price.amount}
                              </span>
                            </h4>
                          </p>
                        </Link>
                        <ProductForm
                          variantId={product.variants?.nodes[0].id}
                          custom={true}
                          button={
                            <button
                              className="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button"
                              id="flash-button"
                            >
                              Add to Cart
                            </button>
                          }
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
