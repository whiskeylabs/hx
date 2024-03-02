import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/testimonial';

const TestimonialSlider = () => {
  return (
    <>
        {/* howell Reviews */}
        <section className="howell-section gap-bottom-140">
            <div className="container">

                {/* Reviews */}
                <div className="howell-reviews">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                            {/* Heading */}
                            <div className="howell-reviews-titles">
                                <h2 className="howell-title-2">
                                    <span data-splitting data-howell-scroll>{Data.title}</span>
                                </h2>
                                <div className="howell-reviews-summary">
                                    <span className="label howell-text-black">
                                        <span data-splitting data-howell-scroll>{Data.rating.value}</span>
                                    </span>
                                    <span className="howell-stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                    </span>
                                    <span className="label">
                                        <span data-splitting data-howell-scroll>{Data.rating.label}</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                            {/* Reviews swiper */}
                            <div className="howell-reviews-carousel">
                                <Swiper
                                    {...sliderProps.testimonialSlider}
                                    className="swiper-container js-reviews-carousel"
                                >
                                    {Data.items.map((item, key) => (
                                    <SwiperSlide key={`tts-slide-${key}`} className="swiper-slide howell-reviews-item">
                                        <div className="text">
                                            <div data-splitting>
                                                <p dangerouslySetInnerHTML={{__html: "“"+item.text+"”"}} />
                                            </div>
                                        </div>
                                        <h5 className="title">
                                            <span data-splitting>{item.name}</span>
                                        </h5>
                                        <div className="subtitle">
                                            <span data-splitting>{item.role}</span>
                                        </div>
                                        <div className="howell-stars stars--small">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* navs */}
                                <div className="js-reviews-carousel-navs">
                                    <div className="howell-prev js-reviews-carousel-prev howell-hover-2">
                                        <i />
                                    </div>
                                    <div className="howell-next js-reviews-carousel-next howell-hover-2">
                                        <i />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  );
};
export default TestimonialSlider;
