import Link from "next/link";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { headerSticky } from "@common/utilits";

const Header2 = ({ darkHeader, cartButton }) => {
	const navItems = [];

	appData.header.menu.forEach((item, index) => {
		let s_class1 = 'dropdown-link';

		if ( item.children != 0 ) {
		s_class1 += 'menu-item-has-children';
		}
		let newobj = Object.assign({}, item, { "classes" :  s_class1 });
		navItems.push(newobj);
	});

	const [desktopMenu, desktopMenuToggle] = useState(false);

	const clickedDesktopMenu = (e) => {
		e.preventDefault();
		desktopMenuToggle(!desktopMenu);
		
		const menuPopup = document.querySelector('.howell-menu-popup');
		const menuContainer = document.querySelector('.howell-menu-container');
		const menuBody = document.querySelector('body');
		const menuHeader = document.querySelector('.howell-header');
		const menuButton = document.querySelector('.howell-menu-btn');

		if ( desktopMenu ) {
				menuBody.classList.remove('howell--noscroll');
				menuHeader.classList.remove('header--active');
				menuPopup.classList.remove('menu--ready');
				menuContainer.classList.add('howell--noscroll');
				menuButton.parentNode.classList.add('howell--notouch');
				let timer1 = setTimeout(function(){
					menuPopup.classList.remove('menu--open');
				}, 300);
				let timer2 = setTimeout(function(){
					menuButton.parentNode.classList.remove('howell--notouch');
					menuPopup.classList.remove('menu--visible');
				}, 1600);
			} else {
				menuBody.classList.add('howell--noscroll');
				menuHeader.classList.add('header--active');
				menuPopup.classList.add('menu--visible');
				menuPopup.classList.add('menu--open');
				menuButton.parentNode.classList.add('howell--notouch');
				let timer3 = setTimeout(function(){
					menuButton.parentNode.classList.remove('howell--notouch');
					menuContainer.classList.remove('howell--noscroll');
					menuPopup.classList.add('menu--ready');
				}, 600);
			}

	}
	const clickedMobileMenuItemParent = (e) => {
		e.preventDefault();
		e.target.parentNode.classList.toggle('opened');
	}

	useEffect(() => {
		headerSticky();
	}, []);

  return (
    <>
      {/* Header */}
      <header className="howell-header header--white">
			<div className="header--builder">
				<div className="container">
					<div className="row">
						<div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center">

							{/* Logo */}
							<div className="howell-logo-image" style={{"maxWidth": "70px"}}>
								<Link href="/">
									<img src={appData.header.logo.image} alt={appData.header.logo.alt} />
                    				<img className="logo--white" src={appData.header.logo.image_white} alt={appData.header.logo.alt} />
								</Link>
							</div>

						</div>
						<div className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-6 align-self-center align-center m-align-right">

							{/* Menu Horizontal */}
							<div className="howell-menu-horizontal">
								<ul className="howell-menu-nav">
									{navItems.map((item, key) => (
									<li key={`header-nav-item-${key}`} className={item.classes}>
										<Link className={item.children ? "howell-lnk lnk--active howell-dropdown-toggle" : "howell-lnk lnk--active"} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""} href={item.link}>{item.label}</Link>
										{item.children != 0 &&
										<i className="icon fas fa-chevron-down" />
										}
										{item.children != 0 &&
										<ul className="sub-menu">
										{item.children.map((subitem, key) => (
										<li key={`header-nav-sub-item-${key}`}>
											<Link className="howell-lnk lnk--active" href={subitem.link}>{subitem.label}</Link>
										</li>
										))}
										</ul>
										}
									</li>
									))}
								</ul>
							</div>

							{/* Menu Hamburger */}
							<a href="#" className="howell-menu-btn" style={{"display": "none"}}><span></span></a>
							<div className="howell-menu-popup align-left">
								<div className="howell-menu-overlay"></div>
								<div className="howell-menu-overlay-after"></div>
								<div className="howell-menu-container howell--noscroll">
									<div className="container">
										<div className="howell-menu">
											<ul className="howell-menu-nav">
												{navItems.map((item, key) => (
												<li key={`header-nav-item-${key}`} className={item.classes}>
													<Link className={item.children ? "howell-lnk lnk--active howell-dropdown-toggle" : "howell-lnk lnk--active"} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""} href={item.link}>{item.label}</Link>
													{item.children &&
													<i className="icon fas fa-chevron-down" />
													}
													{item.children != 0 &&
													<ul className="sub-menu">
													{item.children.map((subitem, key) => (
													<li key={`header-nav-sub-item-${key}`}>
														<Link className="howell-lnk lnk--active" href={subitem.link}>{subitem.label}</Link>
													</li>
													))}
													</ul>
													}
												</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center align-right hide-on-mobile-extra">

							{/* Button */}
							<Link className="howell-btn howell-hover-btn btn--active" href={appData.header.button2.link}>
								<span>{appData.header.button2.label}</span>
							</Link>

						</div>
					</div>
				</div>
			</div>
		</header>
    </>
  );
};
export default Header2;
