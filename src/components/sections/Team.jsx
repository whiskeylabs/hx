import Data from "@data/sections/team.json";
import Link from "next/link";

const TeamSection = ( { team } ) => {
    return (
        <>
            {/* howell Team */}
			<section className="howell-section gap-top-140 gap-bottom-140">
				<div className="container">

					{/* Heading */}
					<div className="howell-heading align-center gap-bottom-40">
						<div className="howell-subtitle-1">
							<span>{Data.subtitle}</span>
						</div>
						<h2 className="howell-title-2">
							<span dangerouslySetInnerHTML={{__html: Data.title}} />
						</h2>
					</div>

					{/* Team items */}
					<div className="row gap-row">

                        {team.slice(0, Data.numOfItems).map((item, key) => (
						<div key={`team-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<div className="howell-team" data-howell-overlay data-howell-scroll>
								<div className="howell-team-item howell-hover-3">
									<div className="desc">
										<h5 className="title">
											<Link href={`/team/${item.id}`} className="howell-lnk">
												<span data-splitting data-howell-scroll>{item.name}</span>
											</Link>
										</h5>
										<div className="howell-subtitle-1">
											<span data-splitting data-howell-scroll>{item.role}</span>
										</div>
										<div className="howell-social-1">
											<ul>
                                                {item.social.map((link, link_key) => (
												<li key={`team-item-${key}-social-link-${link_key}`}>
													<a className="howell-social-link howell-hover-2" href={link.link} title={link.title} target="_blank">
														<i aria-hidden="true" className={link.icon} />
													</a>
												</li>
												))}
											</ul>
										</div>
									</div>
									<div className="image">
										<Link href={`/team/${item.id}`}>
											<img decoding="async" src={item.image} width="350" height="530" alt={item.name} />
										</Link>
									</div>
									<div className="num howell-text-white">
										<span>{item.first_letter}</span>
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

export default TeamSection;