import Data from "@data/sections/counters.json";
import CountUp from 'react-countup';

const CountersSection = () => {
  return (
    <>
      {/* howell Numbers */}
		<section className="howell-section gap-top-140 gap-bottom-140">
			<div className="container">

				{/* Numbers items */}
				<div className="row">
					{Data.items.map((item, key) => (
					<div key={`counters-item-${key}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
						<div className="howell-counter">
							<div className="num howell-text-white js-counter">
								<CountUp end={item.value} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							{item.after != '' &&
							<div className="num-after howell-text-white">{item.after}</div>
							}
							<div className="label">{item.label}</div>
						</div>
					</div>
					))}
				</div>
				
			</div>
		</section>
    </>
  );
};

export default CountersSection;