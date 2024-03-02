import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Data from '@data/sliders/history';

const HistorySlider = () => {
  return (
    <>
        {/* howell History */}
        <section className="howell-section howell-section-bg gap-top-140 gap-bottom-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">

                        {/* Heading */}
                        <div className="howell-heading gap-bottom-80">
                            <div className="howell-subtitle-1">
                                <span dangerouslySetInnerHTML={{__html: Data.subtitle}} />
                            </div>
                            <h2 className="howell-title-2">
                                <span dangerouslySetInnerHTML={{__html: Data.title}} />
                            </h2>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 align-right hide-on-mobile">

                        {/* Button */}
                        <Link className="howell-btn howell-hover-btn" href={Data.button.link}>
                            <i className="arrow">
                                <span />
                            </i>
                            <span>{Data.button.label}</span>
                        </Link>

                    </div>
                </div>

                {/* History swiper */}
                <div className="howell-history-slider">
                    <Swiper
                        {...sliderProps.historySlider}
                        className="swiper-container js-history-slider"
                    >
                        <div className="swiper-wrapper">
                            
                            {Data.items.map((item, key) => (
                            <SwiperSlide key={`history-slide-${key}`} className="swiper-slide">
                                <div className="howell-history-item">
                                    <div className="image" style={{"backgroundImage": "url("+item.image+")"}} data-howell-overlay />
                                    <div className="desc">
                                        <div className="subtitle howell-text-white">
                                            <div data-splitting>{item.subtitle}</div>
                                        </div>
                                        <h5 className="title">
                                            <span data-splitting>{item.title}</span>
                                        </h5>
                                        <div className="text">
                                            <div data-splitting>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))}

                        </div>

                        {/* navs */}
                        <div className="howell-navs js-history-navs">
                            <div className="howell-prev js-history-prev howell-hover-2">
                                <i />
                            </div>
                            <div className="howell-paginations-container">
                                <div className="howell-paginations js-history-pagination" />
                                <div className="swiper-nav-active" />
                            </div>
                            <div className="howell-next js-history-next howell-hover-2">
                                <i />
                            </div>
                        </div>

                    </Swiper>
                </div>

                {/* Button */}
                <div className="hide-on-desktop align-center">
                    <Link className="howell-btn howell-hover-btn" href={Data.button.link}>
                        <i className="arrow">
                            <span />
                        </i>
                        <span>{Data.button.label}</span>
                    </Link>
                </div>

            </div>
        </section>
    </>
  );
};
export default HistorySlider;
