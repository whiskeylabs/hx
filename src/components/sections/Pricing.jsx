import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = ( { bg, hiddenHeading } ) => {
    return (
      <>
        {/* howell Pricing */}
        <section className={`howell-section howell-section-${bg} gap-top-140 gap-bottom-140`}>
          <div className="container">

            {hiddenHeading == undefined &&
            <>
              {/* Heading */}
              <div className="howell-heading gap-bottom-40">
                <div className="howell-subtitle-1">
                  <span>{Data.subtitle}</span>
                </div>
                <h2 className="howell-title-2">
                  <span dangerouslySetInnerHTML={{__html: Data.title}} />
                </h2>
              </div>
            </>
            }

            {/* Pricing items */}
            <div className="row gap-row">

              {Data.items.map((item, key) => (
              <div key={`pricing-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="howell-pricing">
                  <div className={item.active == 1 ? "howell-pricing-item active--default": "howell-pricing-item"}>
                    { item.active == 1 &&
                    <div className="pricing--badge howell-text-white">
                      <span>Recommended</span>
                    </div>
                    }
                    <div className="title">
                      <div className="name">
                        <span>{item.title}</span>
                      </div>
                      <div className="subname">
                        <span>{item.subtitle}</span>
                      </div>
                      <div className="price">
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <div className="desc">
                      <div className="pricing--overlay howell-hover-3 howell-hover-black" />
                      <div className="image howell-text-white">
                        <i aria-hidden="true" className={item.icon}></i>
                      </div>
                      <div className="list">
                        <div>
                          <ul>
                            {item.list.map((element, element_key) => (
                            <li key={`pricinglist${key}-item-${element_key}`} style={{"textDecoration": element.included == 0 ? "line-through" : "none"}}>
                              <i className="far fa-check-square" />{element.label}
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Link className="howell-btn howell-hover-btn btn--border btn--full btn--color" href={item.button.link}>
                        <span>{item.button.label}</span>
                      </Link>
                    </div>
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

export default PricingSection;