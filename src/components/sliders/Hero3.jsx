import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/hero-3';
import Link from "next/link";

const Hero3Slider = ( { projects } ) => {
  return (
    <>
        {/* howell Hero Carousel */}
        <section className="howell-section howell-section-full align-center">
            <div className="container">

                {/* Hero swiper */}
                <div className="howell-hero-carousel-wrap">
                <div className="howell-hero-carousel">
                    <Swiper
                        {...sliderProps.hero3Slider}
                        className="swiper-container js-hero-carousel"
                    >
                        {projects.slice(0, Data.numOfItems).map((item, key) => (
                        <SwiperSlide key={`h2s-slide-${key}`} className="swiper-slide">
                            <div className="howell-hero-carousel-item">
                                <div className="slide">
                                    <Link href={`/projects/${item.id}`}>
                                        <span className="img" style={{"backgroundImage": "url("+item.image+")"}} />
                                    </Link>
                                </div>
                                <div className="titles">
                                    <div className="subtitle">
                                        <div className="text-line-inner">
                                            <span data-splitting>{item.category}</span>
                                        </div>
                                    </div>
                                    <h5 className="title">
                                        <div className="text-line-inner">
                                            <Link href={`/projects/${item.id}`}>
                                                <span data-splitting>{item.title}</span>
                                            </Link>
                                        </div>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* navs */}
                    <div className="js-hero-carousel-navs">
                        <div className="howell-prev js-hero-carousel-prev howell-hover-2">
                            <i />
                        </div>
                        <div className="howell-next js-hero-carousel-next howell-hover-2">
                            <i />
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </section>
    </>
  );
};
export default Hero3Slider;