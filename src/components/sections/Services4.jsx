import { useEffect } from "react";
import Data from "@data/sections/services-4.json";
import { servShowcaseHover } from "@common/utilits";

const Services4Section = ({ services }) => {
  return (
    <>
        {/* howell Services */}
		<section className="howell-section gap-bottom-140">
			<div className="container">

				{/* Heading */}
				<div className="howell-heading gap-bottom-40">
					<div className="howell-subtitle-1">
						<span>{Data.subtitle}</span>
					</div>
					<h2 className="howell-title-2">
						<span>{Data.title}</span>
					</h2>
				</div>

				{/* Services items */}
				<div className="howell-services-list">

                    {services.slice(0, Data.numOfItems).map((item, key) => (
					<div key={`services4-item-${key}`} className="howell-service-item-list">
						<div className="howell-service-item-list-inner">
							<div className="image howell-hover-1">
								<a href={`/services/${item.id}`}>
									<img src={item.icon} alt={item.title} />
								</a>
							</div>
							<div className="num">
								<span> 0{key+1}. </span>
							</div>
							<h5 className="title">
								<a href={`/services/${item.id}`}>
									<span>{item.title}</span>
								</a>
							</h5>
							<div className="howell-text">
								<div>
									<p>{item.short}</p>
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

export default Services4Section;