import Data from "@data/sections/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";

const LatestPostsSection = ( { posts } ) => {
    return (
        <>
            {/* howell Blog */}
			<section className="howell-section gap-top-140 gap-bottom-140">
				<div className="container">

					{/* Heading */}
					<div className="howell-heading align-center gap-bottom-40">
						<div className="howell-subtitle-1">
                            <span dangerouslySetInnerHTML={{__html: Data.subtitle}} />
						</div>
						<h2 className="howell-title-2">
                            <span dangerouslySetInnerHTML={{__html: Data.title}} />
						</h2>
					</div>

					{/* Blog items */}
					<div className="row">
                        {posts.slice(0, Data.numOfItems).map((item, key) => (
						<div key={`latest-post-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="howell-blog-item">
								<div className="image" data-howell-overlay data-howell-scroll>
									<Link href={`/blog/${item.id}`}>
										<img decoding="async" src={item.image} width="400" height="240" alt={item.title} />
									</Link>
								</div>
								<div className="desc">
									<div className="info">
										<div className="date"><Date dateString={item.date} /></div>
                                        {item.category}
									</div>
									<h5 className="title">
										<Link href={`/blog/${item.id}`}>
											<span>{item.title}</span>
										</Link>
									</h5>
									<div className="howell-text">
										<div>
											<p>
                                                {item.short} <br />
                                                <Link href={`/blog/${item.id}`} className="howell-btn howell-hover-btn">
                                                    <span>Read more</span>
                                                </Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						))}
					</div>

					{/* Button */}
					<div className="align-center">
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

export default LatestPostsSection;