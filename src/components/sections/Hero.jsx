import { useState, useEffect } from "react";

import Data from "@data/sections/hero.json";

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import ScrollOut from 'scroll-out'

const HeroSection = () => {
	useEffect(() => {
		Splitting({ by: 'lines' });
		ScrollOut({targets: '[data-howell-scroll]', once: true});
	
		const allWrap = document.querySelectorAll(".word");
		allWrap.forEach((item) => {
		  if ( !item.parentNode.classList.contains('span') ) {
			let wrapper = document.createElement('span');
			wrapper.classList.add('span');
			item.parentNode.insertBefore(wrapper, item);
			wrapper.appendChild(item);
		  }
		});
	
		const allOverlays = document.querySelectorAll("[data-howell-overlay]");
		allOverlays.forEach((item) => {
		  let overlay = document.createElement("div");
		  overlay.classList.add('howell-overlay');
		  item.appendChild(overlay);
		});
	}, []);

	const [mute, setMute] = useState(false);

	const clickedMuteHeroVideo = (e) => {
		e.preventDefault();
    	setMute(!mute);
	};

    return (
        <>
            {/* howell Hero */}
			<section className="howell-section howell-hero">
				<div className="image">
					<video autoPlay muted={!mute} loop playsInline id="heroVideo">
						<source src={Data.video} type="video/mp4" />
					</video>
					<div className="ovrl" style={{"opacity": "0.25"}} />
				</div>
				<div className="container">
					<h1 className="title howell-text-white">
						<span data-splitting data-howell-scroll>
                            {/* <span dangerouslySetInnerHTML={{__html: Data.title.text}} />
                            <span className="howell-sep word"></span> */}
									<div class="name-graphic"  style={{"max-width": "500px"}}>
					<img className="wwip-img" src={Data.image} alt="Where Wild Ideas Play" />
						</div>
						</span>
					</h1>
			
					<div className="text">
						<div className="subtitle howell-text-white">
							<div data-splitting data-howell-scroll>
                                <div dangerouslySetInnerHTML={{__html: Data.subtitle}} />
                            </div>
						</div>
					</div>
					<a href="#" className={mute ? "howell-play-btn active" : "howell-play-btn"} onClick={(e) => clickedMuteHeroVideo(e) }>
						<span className="play-circles" />
						<span className="play-lines">
							<span />
							<span />
							<span />
							<span />
						</span>
					</a>
				</div>
			</section>
        </>
    );
};

export default HeroSection;