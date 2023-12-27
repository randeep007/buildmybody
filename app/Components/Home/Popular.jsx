import React from 'react';
import whey from '../../img/whey.png';
import gainer from '../../img/gainer.png';
import workout from '../../img/workout.png';
import pre from '../../img/pre.png';
import creatine from '../../img/creatine.png';
import amino from '../../img/amino.png';
import { Link } from '@remix-run/react';

const Popular = () => {
  const tiles = [
    { title: 'Whey Protein', url: 'whey-protein', image: whey },
    { title: 'Mass Gainer', url: 'mass-gainer-1', image: gainer },
    { title: 'Creatine', url: 'creatine', image: creatine },
    { title: 'Amino Acids/BCAAs', url: 'amino-acids-bcaas-1', image: amino },
    {
      title: 'Pre/Post Workout',
      url: 'pre-post-workout',
      image: pre,
    },
    {
      title: 'Workout Essentials',
      url: 'workout-essentials',
      image: workout,
    },
  ];
  return (
    <>
      <section id='popular' className='pb-5'>
        <div className="container-fluid" data-aos="fade-up" id='cgap'>
          <div
            className="d-flex justify-content-center mb-5"
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <h1 className="font-weight-bolder custom-heading">
              <em>Popular in Sports Nutrition</em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
            {tiles.map((tile) => (
              <Link to={`/products/${tile.url}`} className="col" key={tile.url}>
                <div className="certificate-card ">
                  <p className="text-center mt-4">
                    <img src={tile.image} className="popular-img " alt="" style={{ width: '60%' }} />
                  </p>
                  <div className="text-center" id='popular-txt'>
                    <span
                      style={{ fontWeight: 'bold' }}
                      className="mt-2 text-dark"
                    >
                      {tile.title}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
