import Data from "@data/sections/services.json";
import Link from "next/link";
import { useEffect } from "react";

import { servicesHover } from "@common/utilits";

const ServicesSection = () => {
  useEffect(() => {
    servicesHover();
  }, []);

  return (
    <>
        {/* howell Services */}
        <section className="howell-section gap-top-140 gap-bottom-140">
            <div className="container-xl">

                {/* Services items */}
                <div className="row howell-services-grid-fw">
                    {Data.items.map((item, key) => (
                    <div key={`services-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
                        <div className={key == 1 ? "howell-service-grid-item howell-hover-1 active active--default" : "howell-service-grid-item howell-hover-1"}>
                            <div className="image">
                                <Link href={item.link}>
                                    <img decoding="async" src={item.image} alt={item.title} />
                                </Link>
                            </div>
                            <h5 className="howell-title-3">
                                <a href={item.link}>
                                    <span>{item.title}</span>
                                </a>
                            </h5>
                            <div className="howell-text">
                                <div>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                            <div className="howell-bubble">
                                <div className="bubble-1" />
                                <div className="bubble-2" />
                                <div className="bubble-3" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </section>
    </>
  );
};

export default ServicesSection;