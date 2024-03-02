import { useEffect } from "react";
import Data from "@data/sections/video.json";
import { circleText } from "@common/utilits";

const VideoSection = () => {
  useEffect(() => {
	circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

	e.target.parentNode.classList.add('active');
	let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
	let videoUrl = videoIframe.dataset.src;
	videoIframe.setAttribute('src', videoUrl);
  }

  return (
    <>
      	{/* howell Video */}
		<section className="howell-section">
			<div className="container">

				{/* video */}
				<div className="howell-video" data-howell-overlay data-howell-scroll>
					<div className="image" onClick={ (e) => clickedVideoButton(e) } style={{"backgroundImage": "url("+Data.bg_image+")"}} />
					<iframe className="js-video-iframe" data-src={"https://www.youtube.com/embed/"+Data.yt_video_id+"?showinfo=0&rel=0&autoplay=1"} />
					<div className="play howell-circle-text" onClick={ (e) => clickedVideoButton(e) }>
						<div className="arrow" />
						<div className="label howell-text-black howell-circle-text-label">{Data.label}</div>
					</div>
				</div>

			</div>
		</section>
    </>
  );
};

export default VideoSection;