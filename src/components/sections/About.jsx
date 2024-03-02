import Data from "@data/sections/about.json";
import Link from "next/link";

const AboutSection = () => {
    return (
      <>
        {/* howell About */}
        <section className="howell-section gap-bottom-140">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-12">

                    {/* Heading */}
                    <div className="howell-heading gap-bottom-40">
                      <div className="howell-subtitle-1">
                        <span>{Data.subtitle}</span>
                      </div>
                      <h2 className="howell-title-2">
                        <span dangerouslySetInnerHTML={{__html: Data.title}} />
                      </h2>
                    </div>

                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12 hide-on-desktop gap-bottom-60">

                    {/* Number */}
                    <div className="howell-number howell-circle-text mrg-left">
                      <div className="num howell-text-white">
                        <span>{Data.number.value}</span>
                      </div>
                      <div className="label howell-text-black howell-circle-text-label">
                        {Data.number.label}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Description */}
                <div className="row">
                  {Data.items.map((item, key) => (
                  <div key={`about-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h5 className="text-uppercase">{item.title}</h5>
                    <p dangerouslySetInnerHTML={{__html: item.text}} />
                    {item.button != undefined &&
                    <Link className="howell-btn howell-hover-btn" href={item.button.link}>
                      <i className="arrow"><span /></i>
                      <span>{item.button.label}</span>
                    </Link>
                    }
                  </div>
                  ))}
                </div>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 hide-on-mobile">

                {/* Number */}
                <div className="howell-number howell-circle-text mrg-right">
                  <div className="num howell-text-white">
                    <span>{Data.number.value}</span>
                  </div>
                  <div className="label howell-text-black howell-circle-text-label">
                    {Data.number.label}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default AboutSection;