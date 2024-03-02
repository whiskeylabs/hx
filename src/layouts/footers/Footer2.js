import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const Footer2 = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="howell-footer footer--white">
			<div className="footer--default">
				<div className="container">

					<div className="row gap-bottom-80">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

							{/* Heading */}
							<div className="howell-heading">
								<h2 className="howell-title-2">
									<span>Come to where the wild ideas play.</span>
								</h2>
								<p><Link href="/contact" className="howell-footer-lnk howell-lnk lnk--revert">Send Us A Message</Link></p>
							</div>

						</div>
					</div>

					<div className="row gap-bottom-60">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">

							{/* Logo */}
							<div className="howell-f-logo gap-bottom-40" style={{"maxWidth": "70px"}}>
								<Link href="/">
									<img src={appData.footer.logo.image} alt={appData.footer.logo.alt} />
								</Link>
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

							{/* Description */}
							<div className="howell-text">
								From the moment our company was founded, we have helped our clients find exceptional solutions <strong>for their businesses</strong>.
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 offset-lg-1">

							{/* Description */}
							<div className="howell-text">
								<ul className="howell-footer-menu">
									<li>
										<Link href="/services/service-1">
											<span className="howell-lnk">Branding &#038; logo</span>
										</Link>
									</li>
									<li>
										<Link href="/services/service-2">
											<span className="howell-lnk">Web design</span>
										</Link>
									</li>
									<li>
										<Link href="/services/service-3">
											<span className="howell-lnk">Development Services</span>
										</Link>
									</li>
									<li>
										<Link href="/blog">
											<span className="howell-lnk">Publications</span>
										</Link>
									</li>
								</ul>
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">

							{/* Description */}
							<div className="howell-text">
								Baird House, 15-17 St Cross St <br />London EC1N 8UW
								<p>
									<a className="howell-lnk" href="tel:+4402074302973" target="blank">+44 (0) 20 7430 2973</a>
									<br />
									<a className="howell-lnk" href="mailto:username@domain.com" target="blank">username@domain.com</a>
								</p>
							</div>

						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">

							{/* Copyright */}
							<div className="copyright">
								<div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">

							{/* Social*/}
							<div className="howell-social-1 howell-social-active">
								<ul>
									{appData.social.map((item, key) => (
									<li key={`fsocial-item-${key}`}>
										<a className="howell-social-link howell-hover-2" href={item.link} title={item.title} target="_blank">
											<i className={item.icon} />
										</a>
									</li>
									))}
								</ul>
							</div>

						</div>
					</div>

				</div>
			</div>
		</footer>

        <ImageView />
    </>
  );
};
export default Footer2;
