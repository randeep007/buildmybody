import React from 'react';
import fat1 from '../../img/fat1.png';
import fat2 from '../../img/fat2.png';
import fat3 from '../../img/fat3.png';
import fat4 from '../../img/fat4.png';
import fat5 from '../../img/fat5.png';
import fat6 from '../../img/fat6.png';
import { Link } from '@remix-run/react';

const WheyEssential = () => {
    const tiles = [
        { url: 'products/fat-burner', image: fat1 },
        { url: 'products/cla', image: fat2 },
        { url: 'product/innovative-laboratories-black-mamba', image: fat3 },
        { url: 'products/enhanced-athelte', image: fat4 }, // Updated URL
        { url: 'product/mhp-xpel', image: fat5 },
        { url: 'product/myogenetix-myodrol-hsp', image: fat6 },
    ];

    return (
        <>
            <section id='popular' className='pb-5'>
                <div className="container" data-aos="fade-up" id='cgap'>
                    <div
                        className="d-flex justify-content-center mb-5"
                        style={{ flexDirection: 'column', alignItems: 'center' }}
                    >
                        <h1 className="font-weight-bolder custom-heading">
                            <em>Popular in Workout Essentials</em>
                        </h1>
                        <hr className="h1-hr" />
                    </div>
                    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                        {tiles.map((tile) => (
                            <Link to={tile.url} className="col" key={tile.url}>
                                <div className="certificate-card ">
                                    <p className="text-center mt-4">
                                        <img src={tile.image} className="popular-img " alt="" style={{ width: '100%' }} />
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

export default WheyEssential;