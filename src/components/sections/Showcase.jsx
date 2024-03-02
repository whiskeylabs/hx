import Data from "@data/sections/showcase.json";
import Link from "next/link";
import { useEffect } from "react";

import { showcaseHover } from "@common/utilits";

const ShowcaseSection = ( { projects } ) => {
	useEffect(() => {
		showcaseHover();
	}, []);

    return (
        <>
            {/* howell Showcase */}
			<section className="howell-section gap-bottom-140" style={{"borderBottom": "1px solid #555"}}>
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

					{/* Showcase */}
					<div className="howell-showcase gap-bottom-40">
						<div className="img-circle howell-circle-move" />

						{/* Showcase items */}
						<div className="howell-showcase-items">
                            {projects.slice(0, Data.numOfItems).map((item, key) => (
							<div key={`showcase-item-${key}`} className="howell-showcase-item">
								<div className="category">
									<a href={`/projects/${item.id}`}>
										<span data-splitting data-howell-scroll>
											<span>{item.category}</span>
										</span>
									</a>
								</div>
								<h3 className="title">
									<a href={`/projects/${item.id}`}>
										<span className="howell-lnk" data-splitting data-howell-scroll>{item.title}</span>
									</a>
								</h3>
								<div className="image" data-howell-overlay data-howell-scroll>
									<span className="img" style={{"backgroundImage": "url(" + item.image + ")"}} />
								</div>
							</div>
                            ))}
						</div>
                        
					</div>

					{/* Button */}
					<Link className="howell-btn howell-hover-btn" href={Data.button.link}>
						<i className="arrow">
							<span />
						</i>
						<span>{Data.button.label}</span>
					</Link>

				</div>
			</section>
        </>
    );
};

export default ShowcaseSection;