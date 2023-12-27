import React, {useState} from 'react';
import banner1 from '../../img/discount-banner1.jpg';
import banner2 from '../../img/discount-banner2.jpg';
import banner3 from '../../img/discount-banner3.jpg';

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([
    {
      src: banner1,
      alt: 'First slide',
      active: true,
    },
    {
      src: banner2,
      alt: 'Second slide',
      active: false,
    },
    {
      src: banner3,
      alt: 'Third slide',
      active: false,
    },
  ]);

  return (
    <section>
      <div
        id="carouselExampleControls3"
        className="carousel slide "
        data-ride="carousel"
      >
        <div className="carousel-inner ">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${item.active ? 'active' : ''}`}
            >
              <img
                className="d-block w-100 carousel-discount-img rounded"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};

export default Carousel;
