import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/hero-4';
import Link from "next/link";

const Hero4Slider = () => {
  return (
    <>
        {/* howell Hero Parallax */}
        <section className="howell-section">
            
            <Swiper
                {...sliderProps.hero4Slider}
                className="swiper-container howell-hero-parallax js-hero-parallax"
            >
                {Data.items.map((item, key) => (
                <SwiperSlide key={`h4s-slide-${key}`} className="swiper-slide">
                <div className="howell-hero-parallax-section">
                    <div className="image" data-dimg={item.image.desktop} data-mimg={item.image.mobile} />
                    <div className="container">
                        <div className="howell-subtitle-1 howell-text-white">
                            <span data-splitting>{item.subtitle}</span>
                        </div>
                        <div className="title howell-text-white">
                            <span data-splitting dangerouslySetInnerHTML={{__html: item.title}} />
                            <span className="sep" style={{"backgroundImage": "url(/images/title_after.svg)"}} />
                        </div>
                        <div className="howell-bts">
                            <Link className="howell-btn btn--border howell-hover-btn btn--color btn--white" href={item.button.link}>
                                <i className="arrow">
                                    <span></span>
                                </i>
                                <span>{item.button.label}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                ))}

                {/*navs*/}
                <div className="howell-navs js-hero-parallax-navs">
                    <div className="howell-prev js-hero-parallax-prev nav--white howell-hover-2">
                        <i />
                    </div>
                    <div className="howell-next js-hero-parallax-next nav--white howell-hover-2">
                        <i />
                    </div>
                </div>
                
                {/*paginations*/}
                <div className="howell-paginations-container howell-paginations-container-vertical pag--white">
                    <div className="howell-paginations js-hero-parallax-pagination" />
                    <div className="swiper-nav-active" />
                </div>
            </Swiper>
        </section>
    </>
  );
};
export default Hero4Slider;