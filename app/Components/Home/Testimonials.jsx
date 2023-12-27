const Testimonials = () => {
  return (
    <section id="testmon">
      <div className="container-xl pt-5 pb-5">
        <div className="row">
          <div className="col-sm-12">
            <div
              className="d-flex justify-content-center mb-5"
              style={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <h1
                className="custom-heading3 text-center"
                style={{ color: '#ff2828', fontWeight: '900' }}
              >
                <em>Customer Reviews</em>
              </h1>
              <hr className="h1-hr" />
            </div>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        {/* <img
                        src=""
                        className="mr-3"
                        alt=""
                      /> */}
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              The Product quality was really good and the price
                              was also somewhat affordable. Go for the On
                              Nutrition Whey Protein package.
                            </p>
                            <p className="overview">
                              <b>Anupam Kumar</b>, New Delhi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="media">
                        {/* <img
                        src=""
                        className="mr-3"
                        alt=""
                      /> */}
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              All types of supplements were there that are
                              required for my body building. All though would
                              suggest to add more flavours options if possible.
                              Else everything was great.
                            </p>
                            <p className="overview">
                              <b>Akash Yaduvansi</b>, Banglore
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        {/* <img
                        src=""
                        className="mr-3"
                        alt=""
                      /> */}
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              The ordering experience was quite easy as I order
                              supplements on monthly basis. Overall good
                              experience uptill now.
                            </p>
                            <p className="overview">
                              <b>Rashmi Singh</b>, Noida
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="media">
                        {/* <img
                        src=""
                        className="mr-3"
                        alt=""
                      /> */}
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              Recently they added more flavours of whey protein
                              and I was literally looking for the flavours
                              option. 100% satisfied with BuildMyBody
                            </p>
                            <p className="overview">
                              <b>Saket Kumar</b>, Noida
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        {/* <img
                        src=""
                        className="mr-3"
                        alt=""
                      /> */}
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              Decent but flavours and categories could be
                              increased.
                            </p>
                            <p className="overview">
                              <b>Smith Kumar</b>, Patna
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="media">
                        {/* <img
                        src=""
                        className="mr-3"
                        alt=""
                      /> */}
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              ordered the on whey protein and got it delivered
                              within 3 days, gg guys keep it up.
                            </p>
                            <p className="overview">
                              <b>Bhavya Sharma</b>, Delhi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
