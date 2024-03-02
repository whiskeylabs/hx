import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/testimonial2';

const Testimonial2Slider = () => {
  return (
    <>
        {/* howell Reviews */}
        <section className="howell-section gap-bottom-140">
            <div className="container">

                {/* Reviews */}
                <div className="howell-reviews gap-140" style={{"backgroundColor": "#000"}}>
                    <div style={{"backgroundImage": "url("+Data.bg_image+")", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "position": "absolute", "left": "0", "top": "0", "width": "100%", "height": "100%", "opacity": "0.24"}} />
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            {/* Reviews swiper */}
                            <div className="howell-reviews-carousel reviews--full howell-text-white align-center">
                                <Swiper
                                    {...sliderProps.testimonialSlider}
                                    className="swiper-container js-reviews-carousel"
                                >
                                    <div className="swiper-wrapper">
                                        {Data.items.map((item, key) => (
                                        <SwiperSlide key={`tst2-slide-${key}`} className="swiper-slide howell-reviews-item">
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
                                    </div>
                                </Swiper>

                                {/*navs */}
                                <div className="js-reviews-carousel-navs">
                                    <div className="howell-prev js-reviews-carousel-prev howell-hover-2 nav--white">
                                        <i />
                                    </div>
                                    <div className="howell-next js-reviews-carousel-next howell-hover-2 nav--white">
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
export default Testimonial2Slider;
